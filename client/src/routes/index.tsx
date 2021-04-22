import { Signin, Signup, Home } from "../containers";

const urls = {
    signin: "/signin",
    signup: "/signup",
    home: "/im"
};

export const publicRoutes = [
    {
        path: urls.signin,
        exact: true,
        component: Signin,
    },
    {
        path: urls.signup,
        exact: true,
        component: Signup,
    },
];

export const privateRoutes = [
    {
        path: urls.home,
        exact: true,
        component: Home
    }
];