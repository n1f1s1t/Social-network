import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

  return (
    <div className={classes.item}>
      <img src="https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" />
       {props.message}
      <div>
        <span>{props.like} like</span>
      </div>
    </div>
  )
}

export default Post;