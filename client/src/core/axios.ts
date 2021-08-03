import axios, { AxiosRequestConfig } from 'axios';
import { localStorageService } from '../services';


const axiosInstance = axios.create({
    baseURL: window.location.origin,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    async (config): Promise<AxiosRequestConfig> => {
        const accessToken = localStorageService.getAccessToken();        
        if(accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
        return config;
    },
    error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response.status === 401){
            localStorageService.removeAccessToken();
            window.location.href = '/auth/signin';
        };
        return error;
    },
);

export default axiosInstance;