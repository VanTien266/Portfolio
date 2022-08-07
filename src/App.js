import React from 'react';
import './App.css';

import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import routes from './router';
import theme from './theme';

const history = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
}

export default App;
