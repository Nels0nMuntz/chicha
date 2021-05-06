import { axiosInstance } from "../../core"
import { IUser } from "../../store/user/types";

class UserService {
    getUserData = async () => {
        try {
            let response = await axiosInstance.get<IUser>('/im');
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new UserService();