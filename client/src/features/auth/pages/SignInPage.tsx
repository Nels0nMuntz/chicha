// vendor
import React from 'react';
// custom
import { AuthLayout } from '../components';
import { SignInContainer } from '../containers';


const SignInPage : React.FC = () => {
    return (
        <AuthLayout
            title="Войти в аккаунт"
            subtitle="Пожалуйста, войдите в свой аккаунт"
        >
            <SignInContainer/>
        </AuthLayout>
    );
};

export default SignInPage;