import React from 'react';
import App from './App';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'typeface-open-sans';
import 'typeface-roboto-condensed';
import 'typeface-cabin';

import 'font-awesome/css/font-awesome.css';
import '@fortawesome/free-brands-svg-icons';

import './App.scss'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);