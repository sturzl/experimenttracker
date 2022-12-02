import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { inject } from '@vercel/analytics';

inject();

const rootReference = document.getElementById('root');
const root = createRoot(rootReference);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
