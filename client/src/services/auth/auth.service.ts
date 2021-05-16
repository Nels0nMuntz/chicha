import { axiosInstance } from "../../core";
import { ISigninData, ISignupData } from "../../store/auth/types";
import { IUser } from "../../store/user/types";
import { AxiosResponse } from "../../types/types";


type AuthResponse = AxiosResponse & {
    data: { user: IUser }
};

type SigninResponse = AuthResponse & {
    data: { accessToken: string }
};

class AuthService {

    signup = async (signupData: ISignupData) => {
        try {
            const { data } = await axiosInstance.post<AuthResponse>('/auth/signup', signupData);
            return data;
        } catch (error) {
            throw error.response.data
        }
    }

    signin = async (signinData: ISigninData) => {
        const { data } = await axiosInstance.post<SigninResponse>('/auth/signin', signinData);
        return data;
    }

    update = async () => {
        const { data } = await axiosInstance.get<AuthResponse>('/im');
        return data;
    }
};

export default new AuthService();