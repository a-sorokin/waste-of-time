import '@/styles/index.scss';
import '@/styles/themes.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initRendererSentry } from '@/sentry/initRendererSentry';
import { App } from '@/App';

initRendererSentry();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
