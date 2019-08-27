import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost"

const MyPosts = (props) => {
  let renderPosts = props.posts.map((post) => {
    return <Post message={post.message} like={post.like} count={post.count}/>
  })
  return (
        <div>
          <AddPost />
          { renderPosts }
        </div>
  )
}

export default MyPosts