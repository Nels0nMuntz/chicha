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
            return document;
        } catch (error) {
            next(new Exception(500, error.message, error.stack));
        }
    }

    getAll = async (req: Request<Array<string>>, res: Response<GetAllResBody>, next: NextFunction) => {
        try {
            const dialogIds = req.body.data;
            const messagesById = dialogIds.reduce(async (prev, curr) => {
                const acc: any = await prev;
                const messages = await this.service.getAllByDialogId(curr);
                acc[curr] = messages;
                return acc;
            }, Promise.resolve({}));
            const result = await messagesById;
            return res.status(200).json({ message: "", data: result });
        } catch (error) {
            next(new Exception(500, error.message, error.stack));
        }
    }

};

export default MessageController;