import React from 'react'
import s from './Dialogs.module.css'

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Settings/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validation/validators";
const mL100 = maxLengthCreator(3)
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
  let renderMessages = props.messages.map(message => {
    return <Message key={message.id} id={message.id} message={message.message}/>
  });
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        {renderDialogs}
      </div>
      <div className={s.message_items}>
        <div>{renderMessages}</div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}
const AddMessageForm =(props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
            <Field component={Textarea}
                   validate={[required, mL100 ]}
                   name='newMessageBody'
                   placeholder='send message'
              />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs