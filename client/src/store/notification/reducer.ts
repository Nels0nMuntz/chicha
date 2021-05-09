import { IInitialState, NotificationAction } from "./types";

const initialState: IInitialState = {
    statusCode: 0,
    message: '',
    isOpen: true,
};

const notificationReducer = (state: IInitialState = initialState, action: NotificationAction): IInitialState => {
    switch (action.type) {
        case 'SWITCH_NOTIFICATION':
            return {
                ...state,
                isOpen: action.payload.isOpen
            };
        case 'CONFIGURE_NOTIFICATION':
            const { statusCode, message, isOpen } = action.payload;
            return {
                ...state,
                statusCode,
                message,
                isOpen,
            }
        default:
            return state;
    }
};

export default notificationReducer;