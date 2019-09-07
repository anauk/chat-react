import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

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
          let follow = () => {
            props.follow(user.id)
          };
          let unfollow = () => {
            props.unfollow(user.id)
          }
          return (
            <div className={s.userWrapper} key={Math.random()}>
      <span>
        <div>
        <img className={s.userPhoto} src={user.url !== null ? userPhoto : user.url}/>
        </div>
        <div>
          {user.followed
            ? <button className={s.buttonWrapper} onClick={unfollow}>Unfollow</button>
            : <button className={s.buttonWrapper} onClick={follow}>Follow</button>}
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