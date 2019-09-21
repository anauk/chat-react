import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setUsersCountAC,
  toggleIsFetchingAC
} from "../../redux/users-reducer";

import * as axios from "axios";
import Preloader from "../Settings/Preloader";

class UserAsClass extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true
    })
      .then(response => {
        this.props.setFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setCount(response.data.totalCount)
      })
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      withCredentials: true
    })
      .then(response => {
        this.props.setUsers(response.data.results)
      })
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null}
      <Users
        count={this.props.count}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
      </>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    count: state.usersPage.count,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
    },
    setFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    }
  }
};
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserAsClass);

export default UsersContainer