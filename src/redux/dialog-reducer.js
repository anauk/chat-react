const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
const initialState = {
  dialogs: [
    {id: 1, name: 'Vasa'},
    {id: 2, name: 'Vasa'},
    {id: 3, name: 'Vasa'},
    {id: 4, name: 'Vasa'},
    {id: 5, name: 'Vasa'},
    {id: 6, name: 'Vasa'},
    {id: 7, name: 'Vasa'},
  ],
  messages: [
    {id: 1, singleMessage: 'Morda'},
    {id: 2, singleMessage: 'Hay'},
    {id: 4, singleMessage: 'Good'},
    {id: 5, singleMessage: 'GiftChat'},
    {id: 6, singleMessage: 'Ok'},
    {id: 3, singleMessage: 'Your'},
  ],
  newMessageBody:''
}
const dialogReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state
    case SEND_MESSAGE:
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messages.push({id: 7, message: body})
      return state
    default: return state
  }
}

export const sendMessageCreator = () => {
  return {type: SEND_MESSAGE}
}
export const updateNewMessageBodyCreator = (body) => {
  return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}


export default dialogReducer