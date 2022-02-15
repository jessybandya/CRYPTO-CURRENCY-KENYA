import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CryptoProvider from './store/CryptoProvider';
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.render(
  <CryptoProvider>
    <App />
  </CryptoProvider>,
  document.getElementById('root')
);


