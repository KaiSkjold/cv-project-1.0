import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './app/MainPage';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
