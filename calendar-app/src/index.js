import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Auth from './auth';

import './index.css';
import App from './App';

axios.defaults.baseURL = "http://localhost:3333";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error.response &&
      error.response.status &&
      error.response.status === 401
    ) {
      Auth.logOut(true);
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
