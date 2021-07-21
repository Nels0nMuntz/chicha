import React from 'react';
import { Switch, } from "react-router-dom";
import { AppRoutes } from './app-routes';
import { Notification } from './components';


const App: React.FC = () => {

  return (
    <div className='App'>
      <Switch>
        {AppRoutes}
      </Switch>
      <Notification />
    </div>
  );
};

export default App;