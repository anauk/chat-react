import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';


let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hay how are you?', like: 'Good', count: 2},
        {id: 2, message: 'Hay', like: 'Good', count: 5},
      ],
      newPostText: "kamasutra.com.ua"
    },
    dialogsPage: {
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
      newMessageBody: ''
    }
  },
  _callSubscriber() {
    console.log('State was changed')
  },
  getState(){
    return this._state
  },
  // _addPost () {
  //   let newText = {
  //     id: 10,
  //     message: this._state.profilePage.newPostText,
  //     like:0,
  //     count:0
  //   };
  //   this._state.profilePage.posts.push(newText);
  //   this._state.profilePage.newPostText='';
  //   this._callSubscriber(this._state);
  // },
  // _updateNewPostText (newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  updateNewMessage (newText) {
    this._state.dialogsPage.newMessageBody = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newText = {
      id: 10,
      message: this._state.dialogsPage.newMessageBody,
    };
    this._state.dialogsPage.messages.push(newText);
    this._state.dialogsPage.newMessageBody='';
    this._callSubscriber(this._state);
  },
  subscribe (observer){
    this._callSubscriber = observer
  },
  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);

    //Вынесла по редюсерам
    // if(action.type === ADD_POST){
    //   this._addPost()
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._updateNewPostText(action.newText)
    // } else if (action.type === ADD_NEW_MESSAGE){
    //   let message = this._state.dialogsPage.newMessageBody;
    //   let newText = { id: 10, message: message };
    //   this._state.dialogsPage.newMessageBody='';
    //   this._state.dialogsPage.messages.push(newText);
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_MESSAGE){
    //   this._state.dialogsPage.newMessageBody = action.body;
    //   this._callSubscriber(this._state);
    // }
  }
};
// export const addPostActionCreator = () => ({ type: ADD_POST });
// export const updateNewPostTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT, newText: text
//   }
// };
// export const addMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
// export const updateNewMessageTextActionCreator = (body) => ({
//   type: UPDATE_NEW_MESSAGE,
//   body: body
// });


export default store;

window.store = store;