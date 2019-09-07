import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

class UserAsClass extends React.Component {
  componentDidMount() {
      axios.get(`https://swapi.co/api/people?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.results)
          this.props.setCount(response.data.count)
        })
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://swapi.co/api/people?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.results)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.count / this.props.pageSize)
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
                onClick={(e) => { this.onPageChanged(page) }}
                className={ this.props.currentPage === page && s.selectedPage }>{page} </span>
            )
          })}
        </div>
        {
          this.props.users.map(user => {
            console.log(user.id);
            let follow = () => {
              this.props.follow(user.id)
            };
            let unfollow = () => {
              this.props.unfollow(user.id)
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
  }
};

export default UserAsClass