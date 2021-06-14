import { axiosInstance } from "../../core";
import { IDialog } from "../../store/dialogs/types";


class DialogService {

    index = async (id: string) => {
        try {
            const response = await axiosInstance.get<IDialog>('/dialogs/index');
            return response;
        } catch (error) {
            throw error.response.data;
        }
    }

    getDialogs = async () => {
        try {
            const response = await axiosInstance.get<Array<IDialog>>('/dialogs/all');
            return response;
        } catch (error) {
            throw error.response.data;
        }
    }

};

const dialogService = new DialogService();

export default dialogService;