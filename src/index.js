import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginForm from './LoginForm.js';
import AnalogClock from './AnalogClock.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>
);

