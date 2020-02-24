import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers } from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/preloader';
import { usersAPI } from '../../api/api';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
 
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize); //thunk в api.js
    } 

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize); //thunk в api.js
    }

    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null }

        <Users  totalUsersCount={this.props.totalUsersCount} 
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        pageSize={this.props.pageSize} 
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers})
)(UsersContainer);