import { Response as ExpressResponse } from 'express';

type ResBody<T> = {
    message: string | string[]
    data: T 
};

export interface Response<T = {}> extends ExpressResponse<ResBody<T>> { };

export class ResponseError extends Error {
    status: number
    message: string
    data: object
    constructor(_status: number, _message: string, _data: object){
        super(_message);
        this.status = _status;
        this.message = _message;
        this.data = _data;
    }
};

export interface IRepository<T> {
    exists(e: T) : Promise<boolean>
    save(e: T) : Promise<any>
    delete(e: T) : Promise<any>
};