import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import state, {addMessage, addPost, updateNewPostText, updateNewMessage, subscribe} from "./redux/state";
// import store from "./redux/storeOOP";
import {BrowserRouter} from "react-router-dom";
// import store from "./redux/storeDispatch";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
// addPost("Hello, i am function addPost")

//
// let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <App
        // state={state}
        //    dispatch={store.dispatch.bind(store)}
        //    store={store}

           // addPost={store.addPost.bind(store)}
           // updateNewPostText={store.updateNewPostText.bind(store)}
           // addMessage={store.addMessage.bind(store)}
           // updateNewMessage={store.updateNewMessage.bind(store)}
      />
      </Provider>
    </BrowserRouter>, document.getElementById('root'))
// }
// rerenderEntireTree();
//
// store.subscribe(() => {
//   rerenderEntireTree()
// });
// rerenderEntireTree(store.getState());
//
// store.subscribe(() => {
//   let state = store.getState()
//   rerenderEntireTree(state)
// });

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



