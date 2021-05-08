import { IInitialState, Action } from './types';


const initialState: IInitialState = {
    user: {
        id: '',
        email: '',
        firstname: '',
        lastname: null,
        password: '',
        phoneNumber: '',
    },
    isAuth: false,
};

const authReducer = (state: IInitialState = initialState, action: Action): IInitialState => {
    switch (action.type) {
        case 'SET_AUTH_DATA':
            return {
                ...state, user: action.payload.user
            };
        case 'SET_AUTH_STATE':
            return {
                ...state, isAuth: action.payload.isAuth
            };
        default:
            return state;
    }
};

export default authReducer;