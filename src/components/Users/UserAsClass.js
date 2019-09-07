import React from 'react'
import * as axios from 'axios';
import Users from "./Users";

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

export default UserAsClass