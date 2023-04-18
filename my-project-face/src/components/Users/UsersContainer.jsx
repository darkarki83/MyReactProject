import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetchingAC } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersApiComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  follow = (id) => {
    //this.props.follow(id);
  }
  unfollow = (id) => {
    //this.props.unfollow(id);
  }

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
      .catch(error => {
        console.error(error);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      })
      .catch(error => {
        console.error(error);
      });

  }

  render() {
    return <>
    { this.props.isFetching ? <Preloader /> : null }
    <Users onPageChanged={this.onPageChanged}
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}

    />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, {
  follow:followAC,
  unfollow:unfollowAC,
  setUsers:setUsersAC,
  setCurrentPage:setCurrentPageAC,
  setTotalUsersCount:setUsersTotalCountAC,
  toggleIsFetching:toggleIsFetchingAC
})(UsersApiComponent);
