const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const initialState = {
  posts: [
    {id: 1, message: 'Hay how are you?', like: 'Good', count: 2},
    {id: 2, message: 'Hay', like: 'Good', count: 5},
    {id: 4, message: 'Good', like: 'Ok', count: 6},
    {id: 5, message: 'GiftChat', like: 'VeryGood', count: 7},
    {id: 6, message: 'Ok', like: 'Good', count: 8},
    {id: 7, message: 'Your', like: 'Good', count: 5},
  ],
  newPostText: 'kasha'
}
const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 7,
        message: state.newPostText,
        like: 0,
        count: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.someText
      return state
    default: return state
  }
}

export const addPostActionCreator = () =>{
  return {type: ADD_POST}
}
export const upDateNewPostActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, someText: text}
}

export default profileReducer