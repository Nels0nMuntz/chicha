type SET_USER_DATA = 'SET_USER_DATA';

export interface IInitialState {
    user: IUser
    isAuth: boolean
}

export interface IUser {
    id: string
    email: string
    firstname: string
    lastname?: string
    password: string
    phoneNumber: string
    avatar?: string
    lastSeen?: Date
}

export type FetchUserDataAction = {
    type: SET_USER_DATA,
    payload: {
        user: IUser,
        isAuth: boolean
    }
}

export type Action = FetchUserDataAction