import React from 'react'
import s from './Dialogs.module.css'

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";

const Dialogs = (props) => {



  let renderDialogs = props.state.dialogs.map(dialog => {
    return <Dialog id={dialog.id} name={dialog.name}/>
  })
  let renderMessages = props.state.messages.map(message =>{
    return <Message singleMessage={message.singleMessage}/>
  })


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
            // value={newMessageBody}
            >
            </textarea>
          </div>
          <div><button >Add</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs