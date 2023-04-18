import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import gif from '../../gqmymopg8bignlcfhvcx.gif'

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
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
      .catch(error => {
        console.error(error);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      })
      .catch(error => {
        console.error(error);
      });

  }

  render() {
    return <>
    { this.props.isFetching ? <img src={gif} /> : null }
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

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);
