class LocalStorageService {

    getAccessToken = () => localStorage.getItem('access_token')

    setAccessToken = (token: string) => {
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token', token);
    }

    hasAccessToken = () => !!localStorage.getItem('access_token')

    removeAccessToken = () => localStorage.removeItem('access_token')

};

const instance = new LocalStorageService()

export default instance;