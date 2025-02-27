import { scan } from 'react-scan';
import '@/styles/index.scss';
import '@/styles/themes.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/App';
import { DEV_MODE } from '@e/constants';

if (DEV_MODE) scan({ enabled: DEV_MODE });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
