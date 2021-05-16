import { NextFunction } from 'express';
import { ValidationError, validationResult } from 'express-validator';

import { Request, Response, Exception } from '../types';
import { IUser, IUserDTO } from '../models/UserModel';
import { AuthService } from '../services';
import { generateAccessToken } from '../utils';



export type SigninReqData = {
    email: string
    password: string
};

type SigninResData = {
    user: IUserDTO,
    accessToken: string
};

class AuthController {

    private service: AuthService

    constructor(){
        this.service = new AuthService();
    }

    signup = async (req: Request<IUser>, res: Response<IUserDTO>, next: NextFunction) => {
        try {

            const errors = validationResult(req).formatWith(errorFormatter);
            if (!errors.isEmpty()) {
                const message = errors.array().map(({ msg }) => msg);
                const details = errors.array()
                next(new Exception(422, message, details));
            };

            const postData = req.body;

            const user = await this.service.signup(postData);

            return res.status(201).json({ message: 'Пользователь успешно зарегисрирован', data: user });
              
        } catch (error) {
            
            next(new Exception(400, error.message, error.stack));

        }
    }

    signin = async (req: Request<SigninReqData>, res: Response<SigninResData>, next: NextFunction) => {
        try {

            const errors = validationResult(req).formatWith(errorFormatter);
            if (!errors.isEmpty()) {
                const message = errors.array().map(({ msg }) => msg);
                const details = errors.array()
                next(new Exception(422, message, details));
            };

            const postData = req.body;

            const user = await this.service.signin(postData);

            const accessToken = generateAccessToken(user.id, user.email);

            return res.status(200).json({ message: 'Пользователь успешно аутентифицировался', data: { user, accessToken } });

        } catch (error) {

            next(new Exception(400, error.message, error.stack));

        }
    }
};

const errorFormatter = (error: ValidationError) => ({ param: error.param, msg: error.msg });

export default new AuthController();