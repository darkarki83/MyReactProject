import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div >
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/3/34/Tufa_towers_in_Mono_Lake-1000px.jpeg' ></img>
      </div>
      <div className={s.descriptionBlock} >

        <img src={props.profile.photos.small} />
        <div>fullName : {props.profile.fullName}</div>
        <div>aboutMe : {props.profile.aboutMe}</div>
        <div>contacts
          <table>
            <tr>
              <td>facebook : {props.profile.contacts.facebook}</td>
              <td>website : {props.profile.contacts.website}</td>
              <td>vk : {props.profile.contacts.vk}</td>
              <td>twitter : {props.profile.contacts.twitter}</td>
              <td>instagram : {props.profile.contacts.instagram}</td>
              <td>youtube : {props.profile.contacts.youtube}</td>
              <td>github : {props.profile.contacts.github}</td>
              <td>mainLink : {props.profile.contacts.mainLink}</td>
            </tr>
          </table>
          <div>lookingForAJobDescription : {props.profile.lookingForAJobDescription}</div>
          ava + discription
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
