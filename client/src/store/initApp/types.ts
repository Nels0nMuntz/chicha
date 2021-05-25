import { ThunkActionType, ThunkDispatchType } from "../../types/types";
import { SetDialogsAction } from "../dialogs/types";
import { LoadingAction } from "../loading/types";
import { ConfigureNotificationAction } from "../notification/types";


type InitAppAction = 
    SetDialogsAction | 
    ConfigureNotificationAction | 
    LoadingAction;

export type InitAppThunkAction = ThunkActionType<InitAppAction>;

export type InitAppThunkDispatch = ThunkDispatchType<InitAppAction>;