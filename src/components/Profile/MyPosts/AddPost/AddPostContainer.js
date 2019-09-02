import React from 'react'
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/storeDispatch";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import AddPost from "./AddPost";

const AddPostContainer = (props) => {
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }
  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }
  return (
    <AddPost
      updatenewPostText={onPostChange}
      addPost={addPost}
      posts={state.posts}
      newPostText={state.newPostText}
    />
  )
}
export default AddPostContainer