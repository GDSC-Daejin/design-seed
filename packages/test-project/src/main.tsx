import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div style={{ minHeight: '100vh', flex: 1 }}>
      <App />
    </div>
  </React.StrictMode>,
);
