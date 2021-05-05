import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store';
import { fetchUserDataThunk } from '../../store/user/thunks';
import { HomePage } from './../../components';


const Home : React.FC = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector((state: RootState) => state.user.isAuth);

    React.useEffect(() => {
        if(!isAuth) dispatch(fetchUserDataThunk())
    });

    return (
        <HomePage/>
    );
};

export default Home;