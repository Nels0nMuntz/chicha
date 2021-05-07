import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";

import { privateRoutes, publicRoutes } from './routes';
import { RootState } from './store';


const App: React.FC = () => {

  // const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <div className='App'>
      <Switch>
        {/* {isAuth && <Redirect exact to='/im' />} */}
        <Redirect exact from='/' to='/im' />
        {publicRoutes.map((routeProps, index) => <Route {...routeProps} key={index + '_public'} />)}
        {privateRoutes.map((routeProps, index) => <Route {...routeProps} key={index + '_private'} />)}
      </Switch>
    </div>
  );
};

export default App;