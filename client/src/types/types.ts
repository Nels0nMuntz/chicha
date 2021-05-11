import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";


export enum Status {
    FAILD = 'Faild',
    SUCCESS = 'Success',
    UNKNOWN = 'Unknown'
};

export type ThunkActionType<T extends AnyAction> = ThunkAction<Promise<void>, RootState, unknown, T>;

export type ThunkDispatchType<T extends AnyAction> = ThunkDispatch<RootState, unknown, T>;

export type AxiosResponse = {
    message: string
    data: {}
};