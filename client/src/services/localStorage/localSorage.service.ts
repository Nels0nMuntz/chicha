class LocalStorageService {

    getAccessToken = () => localStorage.getItem('access_token')

    setAccessToken = (token: string) => {
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token', token);
    }

    hasAccessToken = () => !!localStorage.getItem('access_token')

    removeAccessToken = () => localStorage.removeItem('access_token')

};

const localStorageService = new LocalStorageService()

export default localStorageService;