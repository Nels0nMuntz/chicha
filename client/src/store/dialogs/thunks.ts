import { dialogService } from "../../services";
import { DialogsThunkAction, DialogsThunkDispatch } from "./types";
import { setDialogsAC } from './actions';


export const getDialogsThunk = () : DialogsThunkAction => async  (dispatch: DialogsThunkDispatch) => {
    try {
        const { data } = await dialogService.getDialogs();
        dispatch(setDialogsAC(data));  
    } catch (error) {
        console.log(error);       
    }
};