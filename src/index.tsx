import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then((axe) => {
    axe.default(React, ReactDOM, 1000);
    root.render(<App />);
  });
} else {
  root.render(<App />);
}
