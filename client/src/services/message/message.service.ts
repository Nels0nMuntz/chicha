import { axiosInstance } from "../../core"
import { LastMessages } from "../../store/dialogs/types";
import { AxiosResponse } from "../../types/types"


type GetAllLastRes = AxiosResponse<LastMessages>

class MessageService {

    getAllLast = async (ids: string[]) => {
        try {
            const { data } = await axiosInstance.post<GetAllLastRes>(
                '/messages/last',
                { data: ids }
            );
            return data;
        } catch (error) {
            throw error.response.data;
        }
    }

};

const messageService = new MessageService();

export default messageService;