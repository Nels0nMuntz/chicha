import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

import { localStorageService } from '../../../services';


interface PrivateRouteProps {
    component: React.FC<RouteComponentProps>
    path: string
    exact: boolean
};

const PrivateRoute : React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {

    const isAuth = localStorageService.hasAccessToken();

    return (
        <Route
            {...rest}
            render={(props) => isAuth ? <Component {...props} /> : <Redirect to="/auth/signin" /> }
        />
    )
};

export default PrivateRoute;