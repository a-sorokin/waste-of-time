// import { scan } from 'react-scan';
import '@/styles/index.scss';
import '@/styles/themes.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/App';

// scan({ enabled: true });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
