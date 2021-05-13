import { NextFunction, Request } from "express";
import { Response, ResponseError } from "../types";

const errorHandlerMW = <T extends Response>(request: Request, response: T, next: NextFunction, error: ResponseError): void => {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    response.status(status).json({ message, data: error.data });
};

export default errorHandlerMW;