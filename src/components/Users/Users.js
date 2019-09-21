import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import * as axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.count / props.pageSize)
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div className={s.wrapper}>
      <div>
        { pages.map(page => {
          debugger
          return (
            <span
              onClick={(e) => { props.onPageChanged(page) }}
              className={ props.currentPage === page && s.selectedPage }>{page} </span>
          )
        })}
      </div>
      {
        props.users.map(user => {
          console.log(user.id);
          // let follow = () => {
          //
          // };
          // let unfollow = () => {
          //
          // }
          return (
            <div className={s.userWrapper} key={Math.random()}>
      <span>
        <div>
          <NavLink to={"/profile/"+"2"}>
        <img className={s.userPhoto} src={user.url !== null ? userPhoto : user.url}/>
          </NavLink>
        </div>
        <div>
          {user.followed
            ? <button className={s.buttonWrapper} onClick={
              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},{
                withCredentials: true
              })
                .then(response => {
                  if(response.data.resultCode === 0){
                    props.follow(user.id)
                  }
                })
            }>Unfollow</button>
            : <button className={s.buttonWrapper} onClick={
              axios.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${user.id}`, {
                withCredentials: true,
                // headers:
              })
                .then(response => {
                  if(response.data.resultCode === 0){
                    props.unfollow(user.id)
                  }
                })
            }>Follow</button>}
        </div>
      </span>
              <span>
        <div>{user.name}</div>
        <div>{user.gender}</div>
      </span>
              <span>
        <div>'user.position'</div>
              <div>'user.location.city'</div>
      </span>
            </div>)
        })}
    </div>
  )
};

export default Users