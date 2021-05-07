import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SigninForm, StartPage } from '../../components';
import { RootState } from '../../store';
import { ISigninData } from '../../store/auth/types';
import { fetchAuthDataThunk } from './../../store/auth/thunks';
import { useHistory } from 'react-router-dom';


const Signin: React.FC = () => {

    const dispatch = useDispatch();

    const onSubmit = (values: ISigninData) => { dispatch(fetchAuthDataThunk(values)) };

    const isAuth = useSelector((state: RootState) => state.auth.isAuth);

    const history = useHistory();

    React.useEffect(() => { isAuth && history.push('/im') }, [isAuth, history]);

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