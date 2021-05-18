import { NextFunction, Request } from "express";
import { UserModel } from "../models";
import { IUser, IUserDTO } from "../models/UserModel";
import { UserService } from "../services";
import { Exception, Response } from "../types";

class UserController {

    private service: UserService

    constructor(){
        this.service = new UserService();
    }

    index = async (req: Request, res: Response<IUserDTO>, next: NextFunction) => {
        try {
            const id = req.decodedToken.id;
            const user = await this.service.getUser(id);
            return res.status(200).json({ message: 'Пользователь успешно найден', data: user });
        } catch (error) {
            next(new Exception(422, error.message, {...error}));
        }
    }

    search = async (req: Request, res: Response<Array<IUserDTO>>, next: NextFunction) => {

    }
}

export default new UserController();