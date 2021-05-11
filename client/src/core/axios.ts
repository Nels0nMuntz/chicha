import axios from 'axios';
import { LocalStorageService } from '../services';


const accessToken = LocalStorageService.getAccessToken();

const axiosInstance = axios.create({
    baseURL: window.location.origin,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    config => {
        if(accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
        return config;
    },
    error => Promise.reject(error)
);

export default axiosInstance;