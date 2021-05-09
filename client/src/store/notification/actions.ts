import { SwitchNotificationAC, ConfigureNotificationAC } from "./types";

export const switchNotificationAC: SwitchNotificationAC = (isOpen) => ({
    type: 'SWITCH_NOTIFICATION',
    payload: { isOpen }
});

export const configureNotificationAC : ConfigureNotificationAC = ({ statusCode, message }) => ({
    type: 'CONFIGURE_NOTIFICATION',
    payload: {
        statusCode,
        message,
    }
})