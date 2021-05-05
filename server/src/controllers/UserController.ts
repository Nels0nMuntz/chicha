import { Request, Response } from "express";
import { UserModel } from "../models";
import { IUser, User } from "../models/UserModel";

class UserController {
    getUserData = async (req: Request, res: Response) => {
        try {
            const id = req.decodedToken.id;
            let document = await UserModel.findById(id);
            if(!document) return res.status(400).json({ message: 'Пользователь не найден' });
            const user = new User(document);
            return res.status(200).json({ user });
        } catch (error) {
            return res.status(400).json({ message: 'Ошибка получения данных', details: { ...error } })
        }
    }
}

export default new UserController();