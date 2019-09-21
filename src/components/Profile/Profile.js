import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AddPostContainer from "./MyPosts/AddPost/AddPostContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
        <AddPostContainer
          store={props.store}
          // posts={props.profilePage.posts}
          // newPostText={props.profilePage.newPostText}
          // dispatch={props.dispatch}
          // addPost={props.addPost}
          // updateNewPostText={props.updateNewPostText}
          />
    </div>
  )
}

export default Profile