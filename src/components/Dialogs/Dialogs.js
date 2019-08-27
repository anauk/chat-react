import React from 'react'
import s from './Dialogs.module.css'

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";

const Dialogs = (props) => {

  let renderDialogs = props.dialogsPage.dialogs.map(dialog => {
    return <Dialog id={dialog.id} name={dialog.name}/>
  })
  let renderMessages = props.dialogsPage.messages.map(message =>{
    return <Message singleMessage={message.singleMessage}/>
  })
let addNewMessage = () => {
    props.addMessage()
}
let updteMessage = (e) => {
    e.preventDefault()
    props.updateNewMessage()
}

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
            value={props.dialogsPage.newMessageBody}
            onChange={updteMessage}
            >
            </textarea>
          </div>
          <div><button onClick={addNewMessage}>Add</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs