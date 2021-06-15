import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SigninForm, StartPageLayout } from '../../components';
import { RootState } from '../../store';
import { ISigninData } from '../../store/auth/types';
import { signinThunk } from '../../store/auth/thunks';
import { setIsLoadingAC } from '../../store/loading/actions';


const SigninContainer: React.FC = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = (values: ISigninData) => { 
        dispatch(setIsLoadingAC(true));
        dispatch(signinThunk(values));
    };

    const signinStatus = useSelector((state: RootState) => state.auth.signinStatus);

    React.useEffect(() => { 
        if(signinStatus === 'SUCCESS') history.push('/im');
    }, [signinStatus, history]);

    return (
        <StartPageLayout
            title="Войти в аккаунт"
            subtitle="Пожалуйста, войдите в свой аккаунт"
        >
            <SigninForm 
                onSubmitForm={onSubmit}
            />
        </StartPageLayout>
    );
};

export default SigninContainer;