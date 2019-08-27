import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";

// addPost("Hello, i am function addPost")


ReactDOM.render(<App state={state}/>, document.getElementById('root'));
serviceWorker.unregister();



