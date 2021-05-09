import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SigninForm, StartPageLayout } from '../../components';
import { RootState } from '../../store';
import { ISigninData } from '../../store/auth/types';
import { Status } from '../../types/types';
import { fetchAuthDataThunk } from '../../store/auth/thunks';


const SigninContainer: React.FC = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = (values: ISigninData) => { dispatch(fetchAuthDataThunk(values)) };

    const signinStatus = useSelector((state: RootState) => state.auth.signinStatus);
    const isAuthSuccess = signinStatus === Status.SUCCESS;
    const isAuthUnknown = signinStatus === Status.UNKNOWN;

    React.useEffect(() => { 
        isAuthSuccess && history.push('/im');
    }, [isAuthSuccess, history]);

    return (
        <StartPageLayout
            title="Войти в аккаунт"
            subtitle="Пожалуйста, войдите в свой аккаунт"
        >
            <SigninForm 
                isAuthUnknown={isAuthUnknown}
                onSubmitForm={onSubmit}
            />
        </StartPageLayout>
    );
};

export default SigninContainer;