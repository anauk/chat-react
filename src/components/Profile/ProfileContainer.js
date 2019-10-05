import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, upDateStatus} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom"

class ProfileContainer extends React.Component{
  componentDidMount() {
    let id = this.props.match.params.id;
    if ( !id ) {
      id = 2
    }
    this.props.getUserProfile(id)
    this.props.getUserStatus(id)
  }

  render () {
    return (
      <Profile
        {...this.props}
      profile={this.props.profile}
      status = {this.props.status}
        updateStatus = {this.props.upDateStatus}
      />
    )
  }

}
const mapStateToProps = (state) =>({
profile: state.profilePage.profile,
  status: state.profilePage.status
});
let WithPouterComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile, getUserStatus, upDateStatus })(WithPouterComponent)