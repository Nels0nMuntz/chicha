import { axiosInstance } from "../../core";
import { IDialog } from "../../store/dialogs/types";
import { AxiosResponse } from "../../types/types";


type GetDialogsResponse = AxiosResponse<Array<IDialog>>;

class DialogService {

    getDialogs = async () => {
        try {
            const { data } = await axiosInstance.get<GetDialogsResponse>('/dialogs');
            return data;
        } catch (error) {
            throw error.response.data;
        }
    }

};

const dialogService = new DialogService();

export default dialogService;