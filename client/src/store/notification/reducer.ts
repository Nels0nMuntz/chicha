import { IInitialState, NotificationAction } from "./types";

const initialState: IInitialState = {
    status: 'INITIAL',
    message: [],
    isOpen: false,
    params: [],
};

const notificationReducer = (state: IInitialState = initialState, action: NotificationAction): IInitialState => {
    switch (action.type) {
        case 'SWITCH_NOTIFICATION':
            return {
                ...state,
                isOpen: action.payload.isOpen
            };
        case 'SET_NOTIFICATION':
            const { status, message, isOpen } = action.payload;
            return {
                ...state,
                status,
                message,
                isOpen,
            };
        default:
            return state;
    }
};

export default notificationReducer;