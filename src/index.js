import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addMessage, addPost, updateNewPostText, updateNewMessage, subscribe} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
// addPost("Hello, i am function addPost")

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost={addPost}
           updateNewPostText={updateNewPostText}
           addMessage={addMessage}
           updateNewMessage={updateNewMessage}
      />
    </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree)

// import React from 'react';
// // import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './App';
// import * as serviceWorker from './serviceWorker';
// // import state, { addPost } from "./redux/state";
// // import {BrowserRouter} from "react-router-dom";
// // addPost("Hello, i am function addPost")
// import { rerenderEntireTree} from './render'
// import state from "./redux/state";
//
// rerenderEntireTree(state);
//
// serviceWorker.unregister();



