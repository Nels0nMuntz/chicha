import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StartPage from './components/layouts/StartPage/StartPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <StartPage />
      </div>
    </BrowserRouter>
  );
};

export default App;
