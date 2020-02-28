import React from 'react';
import s from '../MyPosts.module.css';
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name="PostText" component={"textarea"} />
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </form>
    )
}
 
export default reduxForm({form: 'ProfileAddPost'})(addPostForm)