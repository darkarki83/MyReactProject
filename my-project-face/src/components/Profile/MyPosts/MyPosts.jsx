import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
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
      <Post message='Hi, How are you?' likes='20' />
      <Post message='This is my first post' likes='12' />
      <Post message='I love jS' likes='456' />
    </div>
  );
}

export default MyPosts;
