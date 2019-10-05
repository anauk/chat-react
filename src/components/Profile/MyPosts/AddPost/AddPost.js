import React from 'react'
import s from './AddPost.module.css'
import Post from "../Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validation/validators";
import {Textarea} from "../../../Settings/FormsControls/FormsControls";
const maxLength =  maxLengthCreator(10)
const AddPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          validate={[required, maxLength]}/>
      </div>
      <button>ADD</button>
    </form>
}

const AddPostReduxForm = reduxForm({form: "ProfileAddNewPostForm"})(AddPostForm)
const AddPost = React.memo(props => {
  let renderPosts = [...props.posts].reverse().map((post) => {
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
})

export default AddPost