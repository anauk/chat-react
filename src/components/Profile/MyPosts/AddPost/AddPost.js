import React from 'react'
import s from './AddPost.module.css'

const AddPost = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
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