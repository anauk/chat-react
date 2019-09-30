import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../Settings/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      {/*<div>*/}
      {/*  <img src="https://drop.ndtv.com/albums/AUTO/pininfarina-battista/640_640x480.jpg" alt=""/>*/}
      {/*</div>*/}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        <ProfileStatus status={props.status}
                       updateStatus = {props.updateStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo