import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost"
import AddPostContainer from "./AddPost/AddPostContainer";

const MyPosts = (props) => {
  let renderPosts = props.store.getState().profilePage.posts.map((post) => {
    return <Post message={post.message} like={post.like} count={post.count}/>
  })
  return (
        <div>
          <AddPostContainer
            store={props.store}
            dispatch={props.dispatch}
            // addPost={props.addPost}
            // updateNewPostText={props.updateNewPostText}
          />
          { renderPosts }
        </div>
  )
}

export default MyPosts