import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportAccessibility from './utils/reportAccessibility';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportAccessibility(React);
