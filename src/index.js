/**
 * Created by ansarimofid on 24/08/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'

import jQuery from 'jquery';
import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit';

import 'uikit/dist/css/uikit.min.css'
import './index.css';

UIkit.use(Icons);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);