import React from 'react'
import s from './Dialogs.module.css'

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";
// import { addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/storeDispatch";
import { addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";

const Dialogs = (props) => {
  // let state = props.dialogsPage;

  // let renderDialogs = state.dialogs.map(dialog => {
  //   return <Dialog id={dialog.id} name={dialog.name}/>
  // });
  // let renderMessages = state.messages.map(message =>{
  //   return <Message message={message.message}/>
  // });
  // let newMessageBody = state.newMessageBody;
  let renderDialogs = props.dialogs.map(dialog => {
    return <Dialog key={dialog.id} id={dialog.id} name={dialog.name}/>
  });
  let renderMessages = props.messages.map(message =>{
    return <Message key={message.id} id={message.id} message={message.message}/>
  });
  let newMessageBody = props.newMessageBody;

let onSendMessageClick = () => {
    props.sendMessage();
};
let onNewMessageChange = (e) => {
  let body = e.target.value;
  props.updateNewMessageBody(body);
};

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        { renderDialogs}
      </div>
      <div className={s.message_items}>
        <div>{ renderMessages }</div>
        <div>
          <div>
            <textarea
            placeholder='send message'
            value={newMessageBody}
            onChange={onNewMessageChange}
            >
            </textarea>
          </div>
          <div><button onClick={onSendMessageClick}>Add</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs