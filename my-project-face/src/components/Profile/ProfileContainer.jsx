import React, { useEffect } from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { useParams } from 'react-router-dom';



const ProfileContainer = ( props ) => {

  debugger;
  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${props.userId}}`)
      .then(response => {
        props.setUserProfile(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  })
  
    return (
      <div>
        <Profile {...props} profile={props.profile} userId={props.userId}  />
      </div>
    );
  
}

let mapStateToProps = (state) => ( 
  {
  profile: state.profilePage.profile
})

const MyComponent = (props) => {
  const { userId } = useParams();
  // Use the value of id here;
return(
  <>
  <ProfileContainer {...props} profile={props.profile} setUserProfile={props.setUserProfile}  userId={userId}/>
  </>
)
}

export default connect(mapStateToProps, {setUserProfile:setUserProfile

})(MyComponent) ;

