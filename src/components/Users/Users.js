import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import * as axios from "axios";
import {toggleFollowingInProgress} from "../../redux/users-reducer";

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
        <img className={s.userPhoto} src={user.photos !== null ? userPhoto : user.photos}/>
          </NavLink>
        </div>
        <div>
          {user.followed
            ? <button className={s.buttonWrapper}
                      disabled={props.followingInProgress.some(id => id === user.id)}
                      onClick={()=>{
              props.toggleFollowingInProgress(true, user.id);
              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                withCredentials: true
              })
                .then(response => {
                  if(response.data.resultCode === 0){
                    props.follow(user.id)
                  }
                  props.toggleFollowingInProgress(false);
                })
            }}>Unfollow</button>
            : <button className={s.buttonWrapper}
                      disabled={props.followingInProgress}
                      onClick={()=>{
              props.toggleFollowingInProgress(true);
              axios.post(`https://social-network.samuraijs.com/api/1.0/unfollow/${user.id}`,{}, {
                withCredentials: true,
                // headers:
              })
                .then(response => {
                  if(response.data.resultCode === 0){
                    props.unfollow(user.id)
                  }
                  props.toggleFollowingInProgress(false);
                })
            }
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