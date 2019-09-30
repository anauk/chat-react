import React from 'react'
import s from './AddPost.module.css'
import Post from "../Post/Post";
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component="textarea"/>
      </div>
      <button>ADD</button>
    </form>
}

const AddPostReduxForm = reduxForm({form: "ProfileAddNewPostForm"})(AddPostForm)
const AddPost = (props) => {
  let renderPosts = props.posts.map((post) => {
    return <Post message={post.message} like={post.like} count={post.count}/>
  })

  let addPost = (values) => {
    props.addPost(values.newPostText);
  }
  return (
    <div className={s.wrapper}>
      <AddPostReduxForm  onSubmit={addPost}/>
      <div>{renderPosts}</div>
    </div>
  )
}

export default AddPost