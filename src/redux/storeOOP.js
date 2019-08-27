
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
        {id: 1, singleMessage: 'Morda'},
        {id: 2, singleMessage: 'Hay'},
        {id: 4, singleMessage: 'Good'},
        {id: 5, singleMessage: 'GiftChat'},
        {id: 6, singleMessage: 'Ok'},
        {id: 3, singleMessage: 'Your'},
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
  addPost () {
    let newText = {
      id: 10,
      message: this._state.profilePage.newPostText,
      like:0,
      count:0
    };
    this._state.profilePage.posts.push(newText);
    this._state.profilePage.newPostText='';
    this._callSubscriber(this._state);
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
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
  }
}

export default store

window.store = store