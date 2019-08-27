// import {rerenderEntireTree} from "../render";
let rerenderEntireTree = () =>{
  console.log('State was changed')
};
let state = {
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
      newMessageBody:''
    }
  }
window.state = state;
export const addPost = () => {
let newText = {
  id: 10,
  message: state.profilePage.newPostText,
  like:0,
  count:0
}
  state.profilePage.posts.push(newText);
  state.profilePage.newPostText='';
  rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}
export const addMessage = () => {
  let newText = {
    id: 10,
    message: state.dialogsPage.newMessageBody,
  };
  state.dialogsPage.messages.push(newText);
  state.dialogsPage.newMessageBody='';
  rerenderEntireTree(state);
};
export const updateNewMessage = (newText) => {
  state.dialogsPage.newMessageBody = newText;
  rerenderEntireTree(state);
};
export const subscribe = (observer) =>{
  rerenderEntireTree = observer
}
export default state