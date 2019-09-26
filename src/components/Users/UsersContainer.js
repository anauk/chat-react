import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
  follow,
  unfollow,
  toggleFollowingInProgress, getUsersThunk, setCurrentPage
} from "../../redux/users-reducer";

import * as axios from "axios";
import Preloader from "../Settings/Preloader";
import {getUsers} from "../../api/api";

class UserAsClass extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    // this.props.setFetching(true)
    // getUsers(this.props.currentPage, this.props.pageSize)
    //   .then(data => {
    //     this.props.setFetching(false)
    //     this.props.setUsers(data.items)
    //     this.props.setCount(data.totalCount)
    //   })
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize)
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
        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        followingInProgress={this.props.followingInProgress}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
};
let UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsersThunk
})(UserAsClass);

export default UsersContainer