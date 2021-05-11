import { axiosInstance } from "../../core";
import { ISigninData, ISignupData } from "../../store/auth/types";
import { IUser } from "../../store/user/types";
import { AxiosResponse } from "../../types/types";


type AuthResponse = AxiosResponse & {
    data: IUser
};

type SigninResponse = AuthResponse & {
    accessToken: string
};

class AuthService {

    signup = async (signupData: ISignupData) => {
        let response = await axiosInstance.post<AuthResponse>('/auth/signup', signupData);
        console.log(response.data);        
        return response.data;
    }

    signin = async (signinData: ISigninData) => {
        let response = await axiosInstance.post<SigninResponse>('/auth/signin', signinData);
        console.log(response.data);
        return response.data;
    }

    update = async () => {
        let response = await axiosInstance.get<AuthResponse>('/im');
        console.log(response.data);
        return response.data;
    }
};

export default new AuthService();