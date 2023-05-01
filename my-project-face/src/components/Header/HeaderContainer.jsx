import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';



class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        debugger;
        if(response.data.resultCode == 0) {
          this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login)
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return <>
    { this.props.isFetching ? <Preloader /> : null }
    <Header {...this.props} />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.authPage.isAuth,
    login: state.authPage.login
  }
}

export default connect(mapStateToProps, {
  setAuthUserData:setAuthUserData,
})(HeaderContainer);


