import React from 'react';
import { Switch, Route } from "react-router-dom";

import { publicRoutes } from './routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        {publicRoutes.map((routeProps, index) => <Route {...routeProps} key={index} />)}
      </Switch>
    </div>
  );
};

export default App;