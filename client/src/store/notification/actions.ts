import { SwitchNotificationAC, ConfigureNotificationAC } from "./types";

export const switchNotificationAC: SwitchNotificationAC = (isOpen) => ({
    type: 'SWITCH_NOTIFICATION',
    payload: { isOpen }
});

export const configureNotificationAC : ConfigureNotificationAC = ({ status, message, isOpen }) => ({
    type: 'CONFIGURE_NOTIFICATION',
    payload: {
        status,
        message,
        isOpen
    }
})