import { Request as ExpressRequest, Response as ExpressResponse } from 'express';

type ResBody<T> = {
    message: string
    data: T
};

type ResBodyError = {
    message: string | string[]
    details: any
};

export interface Request<T> extends ExpressRequest<any, any, T> { };
export interface Response<T> extends ExpressResponse<ResBody<T>> { };
export interface ResponseError extends ExpressResponse<ResBodyError> { };

export interface IRepository<T> {
    exists(e: T): Promise<boolean>
    save(e: T): Promise<any>
    delete(e: T): Promise<any>
};

export class Exception {
    status: number
    message: string | string[]
    details: any
    constructor(status: number, message: string | string[], details: any) {
        this.status = status;
        this.message = message;
        this.details = details;
    }
};