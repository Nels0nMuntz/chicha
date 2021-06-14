import { SwitchNotificationAC, SetNotificationAC } from "./types";

export const switchNotificationAC: SwitchNotificationAC = (isOpen) => ({
    type: 'SWITCH_NOTIFICATION',
    payload: { isOpen }
});

export const setNotificationAC : SetNotificationAC = ({ status, message, isOpen }) => ({
    type: 'SET_NOTIFICATION',
    payload: {
        status,
        message,
        isOpen
    }
});