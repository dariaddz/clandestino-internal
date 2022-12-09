import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './AppNew';
import reportWebVitals from './reportWebVitals';

import './fonts-colors/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={newStore}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* <Toaster /> */}
    {/* </Provider> */}
  </React.StrictMode>
);
reportWebVitals();
