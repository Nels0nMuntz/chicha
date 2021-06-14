import { Status, ThunkActionType, ThunkDispatchType } from "../../types/types";

type SWITCH_NOTIFICATION = 'SWITCH_NOTIFICATION';
type SET_NOTIFICATION = 'SET_NOTIFICATION';

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

export type SetNotificationAction = {
    type: SET_NOTIFICATION,
    payload: NotificationConfig
};

export type SwitchNotificationAC = (isOpen: boolean) => SwitchNotificationAction;

export type SetNotificationAC = (config: NotificationConfig) => SetNotificationAction;

export type NotificationAction = SwitchNotificationAction | SetNotificationAction;

export type NotificationThunkAction = ThunkActionType<NotificationAction>;

export type NotificationThunkDispatch = ThunkDispatchType<NotificationAction>;