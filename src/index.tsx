import './index.css';
import App from './App';
import React from 'react';
import theme from 'theme';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    ,
  </React.StrictMode>
);

reportWebVitals();
