import { Request, NextFunction } from "express";
import { ResponseError, Exception } from "../types";

const exceptionHandlerMW = (error: Exception, req: Request, res: ResponseError, next: NextFunction): void => {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).json({ message, details: error.details });
};

export default exceptionHandlerMW;