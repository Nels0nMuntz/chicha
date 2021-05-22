import { dialogService } from "../../services";
import { DialogsThunkAction, DialogsThunkDispatch } from "./types";
import { setDialogsAC } from './actions';
import { configureNotificationAC } from "../notification/actions";
import { Status } from "../../types/types";

export const getDialogsThunk = () : DialogsThunkAction => async  (dispatch: DialogsThunkDispatch) => {
    try {
        const { data } = await dialogService.getDialogs();
        dispatch(setDialogsAC(data));
    } catch (error) {
        console.log(error);        
        dispatch(configureNotificationAC({
            status: Status.FAILD,
            message: error.message,
            isOpen: true
        }));
    }
};