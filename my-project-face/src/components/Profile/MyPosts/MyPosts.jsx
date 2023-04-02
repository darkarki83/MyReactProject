import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.profilePage.postsData.map( post => <Post message={post.message} likes={post.likesCount} />  );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
