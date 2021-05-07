import { axiosInstance } from "../../core";
import { ISigninData } from "../../store/auth/types";
import { IUser } from "../../store/user/types";

interface ISigninResponse { 
    user: IUser,
    accessToken: string
}

class AuthService {
    signin = async (signinData: ISigninData) => {
        try {
            let response = await axiosInstance.post<ISigninResponse>('/auth/signin', signinData);
            return response.data;
        } catch (error) {
            throw new Error(error.message)
        }
    }

    update = async () => {
        try {
            let response = await axiosInstance.get<IUser>('/im');
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
};

export default new AuthService();