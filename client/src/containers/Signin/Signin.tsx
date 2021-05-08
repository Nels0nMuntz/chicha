import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SigninForm, StartPage } from '../../components';
import { RootState } from '../../store';
import { ISigninData } from '../../store/auth/types';
import { Status } from '../../types/types';
import { fetchAuthDataThunk } from './../../store/auth/thunks';


const Signin: React.FC = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = (values: ISigninData) => { dispatch(fetchAuthDataThunk(values)) };

    const signinStatus = useSelector((state: RootState) => state.auth.signinStatus);
    const isAuthSuccess = signinStatus === Status.SUCCESS;

    React.useEffect(() => { 
        isAuthSuccess && history.push('/im') 
    }, [isAuthSuccess, history]);

    return (
        <StartPage
            title="Войти в аккаунт"
            subtitle="Пожалуйста, войдите в свой аккаунт"
        >
            <SigninForm onSubmitForm={onSubmit} />
        </StartPage>
    )
};

export default Signin;