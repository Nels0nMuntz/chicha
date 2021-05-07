import { IUser, FetchUserDataAction } from "./types";

export const setUserDataAC = (userData: IUser) : FetchUserDataAction => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            user: userData,
        }
    }
};