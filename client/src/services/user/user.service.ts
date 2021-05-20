import { axiosInstance } from "../../core"
import { IUser } from "../../store/user/types";
import { AxiosResponse } from "../../types/types";

type SearchResponse = AxiosResponse & {
    data: Array<IUser>
};

class UserService {

    getUserData = async () => {
        try {
            const response = await axiosInstance.get<IUser>('/im');
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    search = async (input: string) : Promise<Array<IUser>> => {
        try {
            const { data } = await axiosInstance.get<SearchResponse>(`/search?input='${input}'`);
            return data.data;
        } catch (error) {
            throw error.response.data
        }
    }
}

export default new UserService();