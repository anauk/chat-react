import React from 'react'
import * as axios from 'axios'
import userPhoto from '../assets/images/user.png'

class UsersC extends React.Component {
componentDidMount() {
  axios.get("https://uifaces.co/api?from_age=18", {
    headers: new Headers({
      "X-API-KEY": "063725014070af3ae20f3ae8adb051"
    })
  })
    .then(response => console.log(response))
}

  render() {
  const selectedPage = 'red'
  let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return (
      <div>
        <div>
          { pages.map(p => {
            return (
              <span className={this.props.currentPage === p && selectedPage}>{p}</span>
            )
        }) }
        </div>
        {
        this.props.users.map(u => <div key={u.id}>
        <span>
        <div>
        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
        </div>
        <div>
        {u.follow ?
        <button>Add</button>
        : <button>Delete</button>
        }
        </div>
        </span>
          <span>
            <div>{'u.name'}</div>
            <div>{'u.st'}</div>
          </span>
          <span>
            <div>{'u.xs'}</div>
            <div>{'u.xs}'}</div>
          </span>
        </div>)
        }
      </div>
    )
  }
}

export default UsersC