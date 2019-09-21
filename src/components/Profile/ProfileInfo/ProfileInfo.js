import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../Settings/Preloader";

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img src="https://drop.ndtv.com/albums/AUTO/pininfarina-battista/640_640x480.jpg" alt=""/>
      </div>
      <div className={s.descriptionBlock}>
        <p>height: {props.profile.height}</p>
        ava+description</div>
    </div>
  )
}

export default ProfileInfo