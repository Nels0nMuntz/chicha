type SET_USER_DATA = 'SET_USER_DATA';
type SET_SEARCH_USERS = 'SET_SEARCH_USERS';

export interface IInitialState {
    user: IUser
    search: Array<IUser>
};

export interface IUser {
    id: string
    email: string
    firstName: string
    lastName: string
    password: string
    phoneNumber: string
    avatar: string
    lastSeen?: Date
};

export type SetUserDataAction = {
    type: SET_USER_DATA,
    payload: { user: IUser }
};

export type SetSearchUsersAction = {
    type: SET_SEARCH_USERS,
    payload: { users: Array<IUser> }
};

export type UserAction = SetUserDataAction | SetSearchUsersAction;