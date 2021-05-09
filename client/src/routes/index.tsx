import { HomePage, SigninPage, SignupPage } from "../pages";


const urls = {
    signin: "/auth/signin",
    signup: "/auth/signup",
    home: "/im"
};

export const publicRoutes = [
    {
        path: urls.signin,
        exact: true,
        component: SigninPage,
    },
    {
        path: urls.signup,
        exact: true,
        component: SignupPage,
    },
];

export const privateRoutes = [
    {
        path: urls.home,
        exact: true,
        component: HomePage
    }
];