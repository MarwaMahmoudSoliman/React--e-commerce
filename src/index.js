import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import './index.css';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

