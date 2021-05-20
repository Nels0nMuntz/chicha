import { NextFunction } from "express";
import { IDialog, IDialogDTO } from "../models/DialogModel";
import { DialogService } from "../services";
import { Exception, Request, Response } from "../types";


class DialogController {

    private service: DialogService

    constructor(){
        this.service = new DialogService()
    }

    public getDialogs = async (req: Request, res: Response<Array<IDialogDTO>>, next: NextFunction) => {
        try {
            const id = req.decodedToken.id;
            const dialogs = await this.service.getDialogs(id);
            if(dialogs.length) return res.status(200).json({ message: 'Диалоги пользователя найдены', data: dialogs })
            return res.status(200).json({ message: 'Диалоги пользователя не найдены', data: dialogs })
        } catch (error) {
            next(new Exception(500, error.message, error.stack));
        }
    }

    public create = async (req: Request<IDialog>, res: Response<IDialogDTO>, next: NextFunction) => {
        try {
            const postData = req.body;
            const dialog = await this.service.createDialog(postData);
            return res.status(200).json({ message: 'Диалог успешно создан', data: dialog });
        } catch (error) {
            next(new Exception(500, error.message, error.stack));
        }
    }

}

export default DialogController;