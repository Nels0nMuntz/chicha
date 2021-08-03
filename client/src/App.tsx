import React from 'react';
import { Switch, } from "react-router-dom";
import { AppRoutes } from './app-routes';


const App: React.FC = () => {

  return (
    <div className='App'>
      <Switch>
        {AppRoutes}
      </Switch>
    </div>
  );
};

export default App;