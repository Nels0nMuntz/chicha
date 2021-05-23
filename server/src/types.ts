import { Request as ExpressRequest, Response as ExpressResponse } from 'express';

type ResBody<T> = {
    message: string
    data: T
};

type ResBodyError = {
    message: string | string[]
    details: any
};

export interface Request<T = any,  K = qs.ParsedQs> extends ExpressRequest<any, any, T, K> { };
export interface Response<T> extends ExpressResponse<ResBody<T>> { };
export interface ResponseError extends ExpressResponse<ResBodyError> { };

export interface IRepository<T> {
    exists(id: string): Promise<boolean>
    save(e: T): Promise<any>
    delete(id: string): Promise<any>
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