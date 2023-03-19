import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/3/34/Tufa_towers_in_Mono_Lake-1000px.jpeg' ></img>
      </div>
      <div>
        ava + discription
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;
