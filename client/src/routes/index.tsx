import { urls } from "./urls";
import { Signin, Signup } from "../containers";

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