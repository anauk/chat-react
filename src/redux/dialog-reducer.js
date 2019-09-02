const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

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
  ],
  newMessageBody:''
}
const dialogReducer = (state=initialState, action) => {
  let stateCopy = {
    ...state,
  messages: [...state.messages]
  }
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    case ADD_NEW_MESSAGE:
      let body = stateCopy.newMessageBody;
      stateCopy.newMessageBody = '';
      stateCopy.messages.push({id: 7, message: body});
      return stateCopy;
    default: return state
  }
}

export const addMessageActionCreator = () => {
  return {type: ADD_NEW_MESSAGE}
}
export const updateNewMessageTextActionCreator = (body) => {
  return {type: UPDATE_NEW_MESSAGE, body: body}
}


export default dialogReducer