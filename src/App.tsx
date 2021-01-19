import React from 'react';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
