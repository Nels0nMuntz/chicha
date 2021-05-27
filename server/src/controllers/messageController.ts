import { NextFunction } from "express";
import { IMessage, IMessageDTO } from "../models/MessageModel";
import { MessageService } from "../services";
import { Exception, Request, Response } from "../types";
import { IMessageDocument } from './../models/MessageModel';


type GetAllResBody = {
    [key: string]: Array<IMessageDTO>
};

class MessageController {

    private service: MessageService

    constructor(){
        this.service = new MessageService();
    }

    create = async (req: Request<IMessage>, res: Response<IMessageDocument>, next: NextFunction) => {
        try {
            const message = req.body.data;
            const document = await this.service.create(message);
            return res.status(200).json({ message: 'Сообщение успешно создано', data: document });
        } catch (error) {
            next(new Exception(500, error.message, error.stack));
        }
    }

    getAllLast = async (req: Request<Array<string>>, res: Response<GetAllResBody>, next: NextFunction) => {
        try {
            const dialogIds = req.body.data;
            const messages = dialogIds.reduce(async (result, id) => {
                const acc: any = await result;
                const message = await this.service.getLastOneByDialogId(id);
                acc[id] = message;
                return acc;
            }, Promise.resolve({}));
            const result = await messages;
            return res.status(200).json({ message: "Последние сообщения диалогов пользователя успешно найдены", data: result });
        } catch (error) {
            next(new Exception(500, error.message, error.stack));
        }
    }

};

export default MessageController;