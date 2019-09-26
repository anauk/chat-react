import React from 'react'
import s from './Dialogs.module.css'

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";
// import { addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/storeDispatch";
import { addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

// const DialogsContainer = (props) => {
//   let state = props.store.getState().dialogsPage;
//
// let onSendMessageClick = () => {
//     props.store.dispatch(addMessageActionCreator());
// };
// let onNewMessageChange = (body) => {
//   props.store.dispatch(updateNewMessageTextActionCreator(body));
// };
//
//   return (
//     <Dialogs
//       updateNewMessageBody={onNewMessageChange}
//       sendMessage={onSendMessageClick}
//       dialogsPage={state}/>
//   )
// }
let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageBody: state.dialogsPage.newMessageBody,
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageTextActionCreator(body))
    }

  }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)