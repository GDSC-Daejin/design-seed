import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GdsThemeProvider } from '../../gds-styled-components/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GdsThemeProvider mode={'auto'}>
      <App />
    </GdsThemeProvider>
  </React.StrictMode>,
);
