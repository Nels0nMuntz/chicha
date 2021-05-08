import { IUser } from "../user/types";
import { SetAuthDataAction, SetAuthStateAction } from "./types";

export const setAuthDataAC = (user: IUser) : SetAuthDataAction => ({ type: 'SET_AUTH_DATA' , payload: { user } });

export const setAuthStateAC = (isAuth: boolean) : SetAuthStateAction => ({ type: 'SET_AUTH_STATE' , payload: { isAuth } });