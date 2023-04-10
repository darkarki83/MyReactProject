import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  let postsElements = props.posts.map(post => <Post message={post.message} likes={post.likesCount} key={post.id} />);

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div className={s.textareaBlock} >
        <h3>My posts</h3>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} ></textarea>
          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>

        </div>
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;
