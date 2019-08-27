import React from 'react'
import * as axios from 'axios'
// import userPhoto from '../assets/images/user.png'

const Users = (props) => {
  let getUsers = () => {
    axios.get("https://uifaces.co/api?from_age=18", {
      headers: new Headers({
        "X-API-KEY": "063725014070af3ae20f3ae8adb051"
      })
    })
      .then(response=>console.log(response))
  }
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {/*{*/}
        {/*props.users.map(u => <div key={u.id}>*/}
        {/*<span>*/}
          {/*<div>*/}
            {/*<img src={u.photos.small != null ? u.photos.small : userPhoto}/>*/}
          {/*</div>*/}
          {/*<div>*/}
            {/*{u.followed ?*/}
              {/*<button>Add</button>*/}
              {/*: <button>Delete</button>*/}
            {/*}*/}
          {/*</div>*/}
        {/*</span>*/}
        {/*</div>)*/}
      {/*}*/}
    </div>
  )
}

export default Users