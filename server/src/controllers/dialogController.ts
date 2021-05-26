import { NextFunction } from "express";
import { IDialog, IDialogDTO } from "../models/DialogModel";
import { DialogService } from "../services";
import { Exception, Request, Response } from "../types";


class DialogController {

    private service: DialogService

    constructor(){
        this.service = new DialogService();
    }

    private getUserId = (req: Request) : string => req.decodedToken.id;

    public getDialogs = async (req: Request, res: Response<Array<IDialogDTO>>, next: NextFunction) => {
        try {
            const id = this.getUserId(req);
            const dialogs = await this.service.getDialogs(id);
            if(dialogs.length) return res.status(200).json({ message: 'Диалоги пользователя найдены', data: dialogs })
            return res.status(404).json({ message: 'Диалоги пользователя не найдены', data: dialogs })
        } catch (error) {
            next(new Exception(500, error.message, error.stack));
        }
    }

    public create = async (req: Request<IDialog>, res: Response<IDialogDTO>, next: NextFunction) => {
        try {
            const id = this.getUserId(req);
            const postData = req.body.data;
            const dialog = await this.service.createDialog(postData, id);
            return res.status(200).json({ message: 'Диалог успешно создан', data: dialog });
        } catch (error) {
            next(new Exception(500, error.message, error.stack));
        }
    }

};

export default DialogController;