const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  posts: [
    {id: 1, message: 'Hay how are you?', like: 'Good', count: 2},
    {id: 2, message: 'Hay', like: 'Good', count: 5},
  ],
  newPostText: 'kasha'
}
const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 8,
        message: state.newPostText,
        like: 0,
        count: 0
      };
      state.newPostText = '';
      state.posts.push(newPost);
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.someText;
      return state;
    default: return state
  }
}

export const addPostActionCreator = () =>{
  return {type: ADD_POST}
};
export const updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, someText: text}
};

export default profileReducer