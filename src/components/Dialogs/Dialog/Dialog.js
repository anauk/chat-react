import React from 'react'
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = ({id, name}) =>{
  let path = `/dialogs/${id}`
  return (
    <div className={`${s.dialog} ${s.active}`}><NavLink activeClassName={s.active} to={path}>{name}</NavLink></div>
  )
}

export default Dialog