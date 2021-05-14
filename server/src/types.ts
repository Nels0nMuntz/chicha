import { Response as ExpressResponse } from 'express';

type ResBody<T> = {
    message: string | string[]
    data: T 
};

export interface Response<T = {}> extends ExpressResponse<ResBody<T>> { };

export interface Repo<T> {
    exists(e: T) : Promise<boolean>
    save(e: T) : Promise<T>
    update(e: T) :Promise<T>
    delete(e: T) : Promise<any>
}