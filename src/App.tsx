import React from 'react';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
const App: React.FC = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
