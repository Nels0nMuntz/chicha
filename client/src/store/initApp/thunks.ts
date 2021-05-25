import { dialogService } from "../../services";
import { setDialogsAC } from "../dialogs/actions";
import { setIsLoading } from "../loading/actions";
import { InitAppThunkAction, InitAppThunkDispatch } from "./types";

export const initAppThunk = () : InitAppThunkAction => async (dispatch: InitAppThunkDispatch) => {
    try {
        const { data: dialogs } = await dialogService.getDialogs();
        dispatch(setDialogsAC(dialogs));
        dispatch(setIsLoading(false));
    } catch (error) {
        console.log(error);        
    }
};