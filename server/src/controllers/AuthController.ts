import { Request } from 'express';
import { ValidationError, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Response } from '../types/types';
import { UserModel } from '../models';
import { IUser } from '../models/UserModel';


interface SignupResponse extends Response<IUser | {}> { };
// interface SigninResponse extends Response<SigninResBodyData | {}>{};
// type SigninResBodyData = {
//     user: IUser
//     accessToken: string
// }

class AuthController {

    signup = async (req: Request, res: SignupResponse) => {
        try {
            const errors = validationResult(req).formatWith(errorFormatter);
            if (!errors.isEmpty()) return res.status(422).json({ message: errors.array(), data: {} });

            const postData: IUser = {
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,
                password: req.body.password,
            };
            const isExist = !!await userModel.findOneByEmail(postData.email);
            if (isExist) return res.status(400).json({ message: 'Пользователь с таким email уже существует', data: {} });

            const hashPassword = bcrypt.hashSync(postData.password, 7);
            const userDocument = new userModel({ ...postData, password: hashPassword });
            await userDocument.save();
            return res.status(201).json({ message: 'Пользователь успешно зарегисрирован', data: new User(userDocument) });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Ошибка регистрации', details: error });
        }
    }

    signin = async (req: Request, res: SigninResponse) => {
        try {
            const errors = validationResult(req).formatWith(errorFormatter);
            if (!errors.isEmpty()) return res.status(422).json({ message: errors.array() });

            const postData: {
                email: string
                password: string
            } = {
                email: req.body.email,
                password: req.body.password
            };
            const document = await userModel.findOneByEmail(postData.email);
            if (!document) return res.status(401).json({ message: 'Ошибка авторизации. Указан неверный email или пароль' });
            const isPasswordValid = bcrypt.compareSync(postData.password, document.password);
            if (!isPasswordValid) return res.status(400).json({ message: 'Ошибка авторизации. Указан неверный email или пароль' });
            const user = new User(document);
            const accessToken = generateAccessToken(document._id, document.email);
            return res.status(200).json({ user, accessToken });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Ошибка входа', details: error });
        }
    }
};

const errorFormatter = (error: ValidationError) => error.msg;

const generateAccessToken = (id: string, email: string) => {
    return jwt.sign(
        { id, email },
        process.env.JWT_SECRET_KEY || '',
        {
            expiresIn: process.env.JWT_MAX_AGE || '24h',
            algorithm: 'HS256'
        }
    );
};

export default new AuthController();