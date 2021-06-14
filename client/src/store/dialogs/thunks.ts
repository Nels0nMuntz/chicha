import { dialogService } from "../../services";
import { DialogsThunkAction, DialogsThunkDispatch } from "./types";
import { setDialogAC, setDialogsAC, setDialogsStatusAC } from './actions';
import { setNotificationAC } from "../notification/actions";
import { SetAuthStatusAC } from "../auth/actions";


export const getDialogsThunk = () : DialogsThunkAction => async  (dispatch: DialogsThunkDispatch) => {
    try {
        dispatch(setDialogsStatusAC('RUNNING'));
        const { status, data } = await dialogService.getDialogs();
        if(status === 200){
            dispatch(SetAuthStatusAC('SUCCESS'))
            dispatch(setDialogsAC(data));  
            dispatch(setDialogsStatusAC('SUCCESS'));
        }
    } catch (error) {
        console.log(error);   
        dispatch(setNotificationAC({
            status: 'FAILD',
            message: error.message,
            isOpen: true
        }))    
    }
};

export const getDialogThunk = (id: string) : DialogsThunkAction => async  (dispatch: DialogsThunkDispatch) => {
    try {
        dispatch(setDialogsStatusAC('RUNNING'));
        const { status, data } = await dialogService.index(id);
        if(status === 200){
            dispatch(setDialogsStatusAC('SUCCESS'));
            dispatch(setDialogAC(data));
        }
    } catch (error) {
        console.log(error);   
        dispatch(setNotificationAC({
            status: 'FAILD',
            message: error.message,
            isOpen: true
        })) 
    }
};