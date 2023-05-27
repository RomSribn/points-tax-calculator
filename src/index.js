import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { setupStore } from '@redux/store';
import App from 'src/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@assets/scss/style.scss';

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
