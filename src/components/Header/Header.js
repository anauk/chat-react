import React from 'react'
import logo from "../../assets/images/user.png";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} alt=""/>
      <div className={s.loginBlock}>
        { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  )
}

export default Header