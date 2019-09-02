import React from 'react'
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/storeDispatch";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import AddPost from "./AddPost";
import {connect} from "react-redux";

// const AddPostContainer = (props) => {
//   let state = props.store.getState().profilePage;
//
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }
//   let onPostChange = (text) => {
//     props.store.dispatch(updateNewPostTextActionCreator(text))
//   }
//   return (
//     <AddPost
//       updatenewPostText={onPostChange}
//       addPost={addPost}
//       posts={state.posts}
//       newPostText={state.newPostText}
//     />
//   )
// }
let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updatenewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}
let AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);
export default AddPostContainer