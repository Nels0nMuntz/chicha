import { axiosInstance } from "../../core";
import { ISigninData, ISignupData } from "../../store/auth/types";
import { IUser } from "../../store/user/types";
import { AxiosResponse } from "../../types/types";


type SigninResData = {
    user: IUser,
    accessToken: string
}

type AuthResponse = AxiosResponse<IUser>;

type SigninResponse = AxiosResponse<SigninResData>;

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
        try {
            const { data } = await axiosInstance.post<SigninResponse>('/auth/signin', signinData);
            return data;
        } catch (error) {
            throw error.response.data
        }
    }

    update = async () => {
        try {
            const { data } = await axiosInstance.get<AuthResponse>('/im');
            return data;
        } catch (error) {
            throw error.response.data
        }
    }
};

const authService = new AuthService();

export default authService;