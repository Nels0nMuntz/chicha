import { IUser } from "../user/types";
import { SetAuthDataAction } from "./types";

export const setAuthDataAC = (user: IUser) : SetAuthDataAction => ({ type: 'SET_AUTH_DATA' , payload: { user, isAuth: true } });