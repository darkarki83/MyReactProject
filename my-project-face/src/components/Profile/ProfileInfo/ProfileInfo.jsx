import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div >
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/3/34/Tufa_towers_in_Mono_Lake-1000px.jpeg' ></img>
      </div>
      <div className={s.descriptionBlock} >
        ava + discription
      </div>
    </div>
  );
}

export default ProfileInfo;
