import { IUser, SetUserDataAction, SetSearchUsersAction } from "./types";

export const setUserDataAC = (userData: IUser): SetUserDataAction => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            user: userData,
        }
    }
};

export const setSearchUsersAC = (users: Array<IUser>): SetSearchUsersAction => {
    return {
        type: 'SET_SEARCH_USERS',
        payload: { users }
    }
};