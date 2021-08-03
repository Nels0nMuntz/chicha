import React from "react";
import { SignInPage, SignUpPage } from "./pages";
import { AUTH_SIGNIN_PAGE_URL, AUTH_SIGNUP_PAGE_URL } from "./urls";

import { PublicRoute } from '../../shared';


export const AuthRoutes = [
    <PublicRoute key="auth-signin-page" path={AUTH_SIGNIN_PAGE_URL.urlTemplate} component={SignInPage} exact />,
    <PublicRoute key="auth-signup-page" path={AUTH_SIGNUP_PAGE_URL.urlTemplate} component={SignUpPage} exact />
];