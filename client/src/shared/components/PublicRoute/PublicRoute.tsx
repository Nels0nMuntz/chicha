import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

import { localStorageService } from '../../../services';


interface PublicRouteProps {
    component: React.FC<RouteComponentProps>
    path: string
    exact: boolean
}

const PublicRoute : React.FC<PublicRouteProps> = ({ component: Component, ...rest }) => {

    const isAuth = localStorageService.hasAccessToken();

    return (
        <Route
            {...rest}
            render={(props) => isAuth ? <Redirect to="/"/> : <Component {...props} />}
        />
    )
};

export default PublicRoute;