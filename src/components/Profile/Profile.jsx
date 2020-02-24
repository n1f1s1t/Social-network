import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPost/MyPostsContainer';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;