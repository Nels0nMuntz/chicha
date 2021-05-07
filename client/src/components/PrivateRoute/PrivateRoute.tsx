import React from 'react';
import { Redirect, Route } from 'react-router';

import { LocalStorageService } from '../../services';


type PrivateRouteProps = {
    component: React.FC
    path: string
    exact: boolean
};

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {

    const hasAccessToken = LocalStorageService.hasAccessToken(); 

    if(!hasAccessToken) return <Redirect to='/auth/signin' />;
    return <Route {...props} />;
};

export default PrivateRoute;