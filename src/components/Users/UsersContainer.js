import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersCountAC} from "../../redux/users-reducer";
import * as axios from "axios";

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
    return (
      <Users
        count={this.props.count}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    )
  }
};

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
};
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserAsClass);

export default UsersContainer