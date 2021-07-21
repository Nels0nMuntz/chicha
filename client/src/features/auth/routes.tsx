import React from "react";
import { Route } from "react-router-dom";
import { SignInPage, SignUpPage } from "./pages";
import { AUTH_SIGNIN_PAGE_URL, AUTH_SIGNUP_PAGE_URL } from "./urls";

export const AuthRoutes = [
    <Route key="auth-signin-page" path={AUTH_SIGNIN_PAGE_URL.urlTemplate} component={SignInPage} exact />,
    <Route key="auth-signup-page" path={AUTH_SIGNUP_PAGE_URL.urlTemplate} component={SignUpPage} exact />
];