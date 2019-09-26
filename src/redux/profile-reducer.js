import {getProfile} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  posts: [
    {id: 1, message: 'Hay how are you?', like: 'Good', count: 2},
    {id: 2, message: 'Hay', like: 'Good', count: 5},
  ],
  newPostText: 'kasha',
  profile: null
}
const profileReducer = (state = initialState, action) => {
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
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state
  }
}

export const addPostActionCreator = () => {
  return {type: ADD_POST}
};
export const updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, someText: text}
};
export const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile}
};
export const getUserProfile = (userId) => (dispatch) => {
  getProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data.data))
    })


};

export default profileReducer