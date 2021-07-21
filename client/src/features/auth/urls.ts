import { createPath } from "rd-url-utils";

export const AUTH_SIGNIN_PAGE_URL = createPath<{}>("/auth/signin");
export const AUTH_SIGNUP_PAGE_URL = createPath<{}>("/auth/signup");