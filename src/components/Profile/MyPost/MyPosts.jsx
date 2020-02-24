import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {

  let postsElement = props.posts.map (p => <Post message={p.message} like={p.like} />)

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={classes.myPostsBlock}>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={onAddPost}>Add Post</button>
      </div>
      <div>
        New post
      </div>
      <div className={classes.posts}>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts;