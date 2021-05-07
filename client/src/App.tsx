import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from './components';

import { privateRoutes, publicRoutes } from './routes';


const App: React.FC = () => {

  return (
    <div className='App'>
      <Switch>
        <Redirect exact from='/' to='/im' />
        {publicRoutes.map((routeProps, index) => <Route {...routeProps} key={index + '_public'} />)}
        {privateRoutes.map((routeProps, index) => <PrivateRoute {...routeProps} key={index + '_private'} />)}
      </Switch>
    </div>
  );
};

export default App;