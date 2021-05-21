import { NextFunction } from "express";
import { DialogService } from "../services";
import { Request, Response } from "../types";

class DialogController {

    private service: DialogService

    constructor(){
        this.service = new DialogService()
    }

    public getDialogs = async (req: Request, res: Response, next: NextFunction) 

}

export default DialogController;