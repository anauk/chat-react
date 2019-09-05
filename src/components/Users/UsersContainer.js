import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC, setUsersAC} from "../../redux/users-reducer";
import UserAsClass from "./UserAsClass";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserAsClass)

export default UsersContainer