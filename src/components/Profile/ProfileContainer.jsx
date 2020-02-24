import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { getUserProfile } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

  componentDidMount() {
    debugger
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 6067;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(connect(mapStateToProps, {getUserProfile}), withRouter)(ProfileContainer);
