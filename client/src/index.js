import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Root
} from './components';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

const id = "";

ReactDOM.render( < Root identifier={id}/ > , document.getElementById('root'));

serviceWorker.unregister();
