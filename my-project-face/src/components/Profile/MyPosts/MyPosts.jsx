import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, onPostChangeActionCreator} from './../../../redux/state'

const MyPosts = (props) => {

  let postsElements = props.profilePage.postsData.map( post => <Post message={post.message} likes={post.likesCount} />  );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator()); 
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(onPostChangeActionCreator(text)); 
  }

  return (
    <div>
      <div  className={s.textareaBlock} >
        <h3>My posts</h3>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText} ></textarea>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
          
        </div>
      </div>
        {postsElements}
    </div>
  );
}

export default MyPosts;
