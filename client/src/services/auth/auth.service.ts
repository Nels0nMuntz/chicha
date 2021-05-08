import { axiosInstance } from "../../core";
import { ISigninData, ISignupData } from "../../store/auth/types";
import { IUser } from "../../store/user/types";

interface ISigninResponse { 
    user: IUser,
    accessToken: string
}

class AuthService {

    signup = async (signupData: ISignupData) => {
        let response = await axiosInstance.post<IUser>('/auth/signup', signupData);
        return response.data;
    }

    signin = async (signinData: ISigninData) => {
            let response = await axiosInstance.post<ISigninResponse>('/auth/signin', signinData);
            return response.data;
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