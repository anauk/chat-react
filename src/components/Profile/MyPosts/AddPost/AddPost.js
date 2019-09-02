import React from 'react'
import s from './AddPost.module.css'
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/storeDispatch";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";

const AddPost = (props) => {

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
    </div>
  )
}
export default AddPost