class LocalStorageService {

    getAccessToken = () => localStorage.getItem('access_token');

    setAccessToken = (token: string) => {
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token', token);
    }

    removeAccessToken = () => localStorage.removeItem('access_token');

};

const instance = new LocalStorageService()

export default instance;