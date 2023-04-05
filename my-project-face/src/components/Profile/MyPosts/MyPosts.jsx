import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.profilePage.postsData.map( post => <Post message={post.message} likes={post.likesCount} />  );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type:'ADD-POST'}); 
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type:'UPDATE-NEW-POST-TEXT', newText:text};
    props.dispatch(action); 
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
