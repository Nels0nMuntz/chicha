import { Request, Response } from 'express';
import { ValidationError, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { UserModel } from '../models';


class AuthController {

    signup = async (req: Request, res: Response) => {
        try {
            const errors = validationResult(req).formatWith(errorFormatter);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() })
            };

            const postData : {
                email: string
                password: string
                firstname: string
                lastname: string
            } = {
                email: req.body.email,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
            };
            const doc = await UserModel.findOneByEmail(postData.email);
            if(doc) return res.status(400).json({ message: 'Пользователь с таким email уже существует' });

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
            if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
            
            const postData : {
                email: string
                password: string
            } = {
                email: req.body.email,
                password: req.body.password
            };
            const doc = await UserModel.findOneByEmail(postData.email);
            if(!doc) return res.status(400).json({ message: 'Ошибка авторизации. Указан неверный email или пароль' });
            const isPasswordValid = bcrypt.compareSync(postData.password, doc.password);
            if(!isPasswordValid) return res.status(401).json({ message: 'Ошибка авторизации. Указан неверный email или пароль' });
            const accessToken = generateAccessToken(doc._id, doc.email);
            return res.status(200).json({ token: accessToken });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Ошибка входа', details: error });
        }
    }

    getUsers = async (req: Request, res: Response) => {
        try {
            res.send('list of users')
        } catch (error) {

        }
    }
};

const errorFormatter = (error: ValidationError) => error.msg;

const generateAccessToken = ( id: string, email: string) => {
    return jwt.sign(
        { id, email }, 
        process.env.JWT_SECRET_KEY || '',
        {
            expiresIn: process.env.JWT_MAX_AGE,
            algorithm: 'HS256'
        }
    );
};

export default new AuthController();