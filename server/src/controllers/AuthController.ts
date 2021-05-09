import { Request, Response } from 'express';
import { ValidationError, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { UserModel } from '../models';
import { IUser, User } from '../models/UserModel';


class AuthController {

    signup = async (req: Request, res: Response) => {
        try {
            const errors = validationResult(req).formatWith(errorFormatter);
            if (!errors.isEmpty()) return res.status(422).json({ message: errors.array() });

            const postData: IUser = {
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,
                password: req.body.password,
            };
            const doc = await UserModel.findOneByEmail(postData.email);
            if (doc) return res.status(400).json({ message: 'Пользователь с таким email уже существует' });

            const hashPassword = bcrypt.hashSync(postData.password, 7);
            const user = new UserModel({ ...postData, password: hashPassword });
            await user.save();
            return res.status(201).json({ message: 'Пользователь успешно зарегисрирован' });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Ошибка регистрации', details: error });
        }
    }

    signin = async (req: Request, res: Response) => {
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
            const document = await UserModel.findOneByEmail(postData.email);
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