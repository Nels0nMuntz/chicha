import { IUser } from "../user/types";
import { ThunkActionType, ThunkDispatchType } from "..";


type SET_AUTH_DATA = 'SET_AUTH_DATA';

export interface IInitialState {
    user: IUser
    isAuth: boolean
}

export interface ISigninData {
    email: string
    password: string
}

export type SetAuthDataAction = {
    type: SET_AUTH_DATA,
    payload: {
        user: IUser,
        isAuth: boolean
    }
}

export type Action = SetAuthDataAction

export type AuthThunkAction = ThunkActionType<Action>

export type AuthThunkDispatch = ThunkDispatchType<Action>