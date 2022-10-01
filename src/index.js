import React from 'react';
import App from './App';

import { createRoot } from 'react-dom/client';

import 'font-awesome/css/font-awesome.css';
import '@fortawesome/free-brands-svg-icons';

import './App.scss'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);