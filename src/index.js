import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './AppNew';
import reportWebVitals from './reportWebVitals';
// import { store } from './redux/store';

import './fonts-colors/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* <Toaster /> */}
    {/* </Provider> */}
  </React.StrictMode>
);
reportWebVitals();
