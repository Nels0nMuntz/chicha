import { Status, ThunkActionType, ThunkDispatchType } from "../../types/types";

type SWITCH_NOTIFICATION = 'SWITCH_NOTIFICATION';
type CONFIGURE_NOTIFICATION = 'CONFIGURE_NOTIFICATION';

type NotificationConfig = {
    status: Status
    message: string | string[]
    isOpen: boolean
};

export interface IInitialState {
    status: Status
    message: string | string[]
    isOpen: boolean    
    params: string[]
};

export type SwitchNotificationAction = {
    type: SWITCH_NOTIFICATION
    payload: {
        isOpen: boolean
    }
};

export type ConfigureNotificationAction = {
    type: CONFIGURE_NOTIFICATION,
    payload: NotificationConfig
};

export type SwitchNotificationAC = (isOpen: boolean) => SwitchNotificationAction;

export type ConfigureNotificationAC = (config: NotificationConfig) => ConfigureNotificationAction;

export type NotificationAction = SwitchNotificationAction | ConfigureNotificationAction;

export type NotificationThunkAction = ThunkActionType<NotificationAction>;

export type NotificationThunkDispatch = ThunkDispatchType<NotificationAction>;