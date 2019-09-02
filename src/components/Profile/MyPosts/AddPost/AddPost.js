import React from 'react'
import s from './AddPost.module.css'
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/storeDispatch";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import Post from "../Post/Post";

const AddPost = (props) => {
  let renderPosts = props.posts.map((post) => {
    return <Post message={post.message} like={post.like} count={post.count}/>
  })
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatenewPostText(text)
  }
  return (
    <div className={s.wrapper}>
      <div>
      <textarea
        ref={newPostElement}
        placeholder="enter your post"
        value={props.newPostText}
        onChange={onPostChange}/>
      </div>
      <button onClick={addPost}>ADD</button>
      <div>{ renderPosts }</div>
    </div>
  )
}
export default AddPost