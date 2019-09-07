import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersCountAC} from "../../redux/users-reducer";
import UserAsClass from "./UserAsClass";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    count: state.usersPage.count,
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page))
    },
    setCount: (count) => {
      dispatch(setUsersCountAC(count))
    }
  }
}
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserAsClass)

export default UsersContainer