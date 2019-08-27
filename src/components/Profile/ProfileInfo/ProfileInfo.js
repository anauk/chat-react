import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://drop.ndtv.com/albums/AUTO/pininfarina-battista/640_640x480.jpg" alt=""/>
      </div>
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  )
}

export default ProfileInfo