import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom"

class ProfileContainer extends React.Component{
  componentDidMount() {
    let id = this.props.match.params.id;
    if ( !id ) {
      id = 2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/${id}/`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render () {
    return (
      <Profile
        {...this.props}
      profile={this.props.profile}/>
    )
  }

}
const mapStateToProps = (state) =>({
profile: state.profilePage.profile
});
let WithPouterComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithPouterComponent)