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
    case ADD_POST: {
      let newPost = {
        id: 8,
        message: state.newPostText,
        like: 0,
        count: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.someText
      }
    }
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