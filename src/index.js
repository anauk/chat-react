import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import state, {addMessage, addPost, updateNewPostText, updateNewMessage, subscribe} from "./redux/state";
import store from "./redux/storeOOP";
import {BrowserRouter} from "react-router-dom";
// addPost("Hello, i am function addPost")

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost={store.addPost.bind(store)}
           updateNewPostText={store.updateNewPostText.bind(store)}
           addMessage={store.addMessage.bind(store)}
           updateNewMessage={store.updateNewMessage.bind(store)}
      />
    </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

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



