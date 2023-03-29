import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.postsData.map( post => <Post message={post.message} likes={post.likesCount} />  );

  return (
    <div>
      <div  className={s.textareaBlock} >
        <h3>My posts</h3>
        <div>
          <textarea ></textarea>
          <div>
            <button>Add post</button>
          </div>
          
        </div>
      </div>
        {postsElements}
    </div>
  );
}

export default MyPosts;
