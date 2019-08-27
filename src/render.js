import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './redux/state'
// addPost("Hello, i am function addPost")

export let renderTree = (state) => {
  ReactDOM.render(<App state={state}
                       addPost={addPost}
  />, document.getElementById('root'));
}
serviceWorker.unregister();

export default renderTree