import s from "./Message.module.css";
import React from "react";

const Message = ({singleMessage}) =>{
  return (
    <div className={s.message}>{singleMessage}</div>
  )
}
export default Message