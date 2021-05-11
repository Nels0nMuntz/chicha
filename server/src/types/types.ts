import { Response as ExpressResponse } from 'express';

type ResErrorBody = {
    message: string | string[]
};

type ResSuccessBody<T> = ResErrorBody & {
    data: T
};

type ResponseError = ExpressResponse<ResErrorBody>;
type ResponseSuccess<T> = ExpressResponse<ResSuccessBody<T>>;

export type Response<T = {}> = ResponseSuccess<T> | ResponseError;