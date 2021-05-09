import { ThunkActionType, ThunkDispatchType } from "../../types/types";

type SWITCH_NOTIFICATION = 'SWITCH_NOTIFICATION';
type CONFIGURE_NOTIFICATION = 'CONFIGURE_NOTIFICATION';

export enum StatusCode {
    Unknown = 0,
    Success = 1,
    Error = 2,
};

type NotificationConfig = {
    statusCode: StatusCode
    message: string
};

export interface IInitialState {
    statusCode: StatusCode
    message: string
    isOpen: boolean
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

export type SwitchNotificationAC = (status: boolean) => SwitchNotificationAction;

export type ConfigureNotificationAC = (config: NotificationConfig) => ConfigureNotificationAction;

export type NotificationAction = SwitchNotificationAction | ConfigureNotificationAction;

export type NotificationThunkAction = ThunkActionType<NotificationAction>;

export type NotificationThunkDispatch = ThunkDispatchType<NotificationAction>;