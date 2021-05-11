import { Status } from "../../types/types";
import { IInitialState, NotificationAction } from "./types";

const initialState: IInitialState = {
    status: Status.UNKNOWN,
    message: '',
    isOpen: false,
};

const notificationReducer = (state: IInitialState = initialState, action: NotificationAction): IInitialState => {
    switch (action.type) {
        case 'SWITCH_NOTIFICATION':
            return {
                ...state,
                isOpen: action.payload.isOpen
            };
        case 'CONFIGURE_NOTIFICATION':
            const { status, message, isOpen } = action.payload;
            return {
                ...state,
                status,
                message,
                isOpen,
            }
        default:
            return state;
    }
};

export default notificationReducer;