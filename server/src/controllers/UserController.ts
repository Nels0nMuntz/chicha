import { NextFunction } from "express";
import { IUserDTO } from "../models/UserModel";
import { UserService } from "../services";
import { Exception, Request, Response } from "../types";


type SearchReqQuery = {
    input: string
}

class UserController {

    private service: UserService

    constructor(){
        this.service = new UserService();
    }

    public index = async (req: Request, res: Response<IUserDTO>, next: NextFunction) => {
        try {
            const id = req.decodedToken.id;
            const user = await this.service.getUser(id);
            return res.status(200).json({ message: 'Пользователь успешно найден', data: user });
        } catch (error) {
            next(new Exception(422, error.message, {...error}));
        }
    }

    public search = async (req: Request<any, SearchReqQuery>, res: Response<Array<IUserDTO>>, next: NextFunction) => {
        try {
            const queryParam = req.query.input.slice(1, -1);
            const user = await this.service.search(queryParam);
            return res.status(200).json({ message: 'Пользователи успешно найдены', data: user })
        } catch (error) {
            next(new Exception(422, error.message, {...error}));
        }
    }
}

export default UserController;