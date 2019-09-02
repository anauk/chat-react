import React from 'react'
import s from './Dialogs.module.css'

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";
// import { addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/storeDispatch";
import { addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

let onSendMessageClick = () => {
    props.store.dispatch(addMessageActionCreator());
};
let onNewMessageChange = (body) => {
  props.store.dispatch(updateNewMessageTextActionCreator(body));
};

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}/>
  )
}

export default DialogsContainer