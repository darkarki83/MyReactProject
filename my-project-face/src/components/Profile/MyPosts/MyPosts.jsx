import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.postsData.map( post => <Post message={post.message} likes={post.likesCount} />  );

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  
  return (
    <div>
      <div  className={s.textareaBlock} >
        <h3>My posts</h3>
        <div>
          <textarea ref={newPostElement} ></textarea>
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
