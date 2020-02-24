import React from 'react';
import { updateNewPostTextCreator, addPostActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextCreator(text);
      dispatch(action)
    }
  }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;