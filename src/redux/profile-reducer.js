import {getProfile, getStatus} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
  posts: [
    {id: 1, message: 'Hay how are you?', like: 'Good', count: 2},
    {id: 2, message: 'Hay', like: 'Good', count: 5},
  ],
  profile: null,
  status: ''
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 8,
        message: action.newPostText,
        like: 0,
        count: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId)
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case UPDATE_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default:
      return state
  }
}

export const addPostActionCreator = (newPostText) => {
  return {type: ADD_POST, newPostText}
};
export const deletePost = (postId) => {
  return {type: DELETE_POST, postId}
};
export const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile: profile}
};
export const setStatus = (status) => {
  return {type: SET_STATUS, status: status}
};
export const upDateStatus = (status) => {
  return {type: UPDATE_STATUS, status: status}
};
export const getUserProfile = (userId) => (dispatch) => {
  getProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data.data))
    })
};
export const getUserStatus = (status) => (dispatch) => {
  getStatus(status)
    .then(data => {
      dispatch(setStatus(status))
    })
};

export default profileReducer