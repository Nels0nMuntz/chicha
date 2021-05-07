import { IInitialState, Action } from './types';


const initialState: IInitialState = {
    user: {
        id: '',
        email: '',
        firstname: '',
        password: '',
        phoneNumber: '',
    },
    isAuth: false,
}

const authReducer = (state: IInitialState = initialState, action: Action) : IInitialState => {
    switch (action.type) {
        case 'SET_AUTH_DATA':
            const { user, isAuth } = action.payload;
            return {
                ...state,
                user,
                isAuth
            }
        default:
            return state;
    }
}

export default authReducer;