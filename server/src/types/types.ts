import { Response as ExpressResponse } from 'express';

type ResBody<T> = {
    message: string | string[]
    data: T 
};

export interface Response<T = {}> extends ExpressResponse<ResBody<T>> { };