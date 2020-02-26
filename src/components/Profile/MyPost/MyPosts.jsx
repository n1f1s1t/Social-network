import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControl/FormsControl';

const maxLength10 = maxLengthCreator(10)

const addPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} placeholder={"Post message"} 
        validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
}

const AddNewPostFormRedux  = reduxForm({form: "ProfileAddNewPostForm"})(addPostForm)

const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} like={p.like} />)

  let newPostElement = React.createRef()

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={classes.myPostsBlock}>
      <h3>My Post</h3>
      <AddNewPostFormRedux  onSubmit={onAddPost} />
      <div className={classes.posts}>
        {postsElement}
      </div>
    </div>
  )
}



export default MyPosts;