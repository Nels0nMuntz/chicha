import React from 'react';
import { Switch, Route } from "react-router-dom";

import { privateRoutes, publicRoutes } from './routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        {publicRoutes.map((routeProps, index) => <Route {...routeProps} key={index + "_public"} />)}
        {privateRoutes.map((routeProps, index) => <Route {...routeProps} key={index + "_private"}  />)}
      </Switch>
    </div>
  );
};

export default App;