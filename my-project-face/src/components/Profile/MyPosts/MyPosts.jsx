import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea ></textarea>
        <button>Add post</button>
      </div>
      <Post message='Hi, How are you?' likes='20' />
      <Post message='This is my first post' likes='12' />
      <Post message='I love jS' likes='456' />
    </div>
  );
}

export default MyPosts;
