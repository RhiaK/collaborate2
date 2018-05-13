import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import 'jquery';
global.jQuery = require('jquery');
require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
