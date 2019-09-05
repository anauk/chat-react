import React from 'react'

import UsersC from '../components/UsersC'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUserAC} from "../reducers/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollowAC: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUserAC: (users) => {
      dispatch(setUserAC(users))
    }
  }
}

export  default connect(mapStateToProps, mapDispatchToProps)(UsersC)