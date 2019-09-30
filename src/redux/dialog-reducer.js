const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

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
    {id: 1, message: 'Morda'},
    {id: 2, message: 'Hay'},
    {id: 4, message: 'Good'},
    {id: 5, message: 'GiftChat'},
    {id: 6, message: 'Ok'},
    {id: 3, message: 'Your'},
  ]
}
const dialogReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 7, message: body}]
      }
      // stateCopy.messages.push({id: 7, message: body});
    default: return state
  }
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_NEW_MESSAGE, newMessageBody})

export default dialogReducer