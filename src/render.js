import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewPostText, updateNewMessage} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
// addPost("Hello, i am function addPost")

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost={addPost}
           updateNewPostText={updateNewPostText}
           addMessage={addMessage}
           updateNewMessag={updateNewMessage}/>
    </BrowserRouter>, document.getElementById('root'));
};

