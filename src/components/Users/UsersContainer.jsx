import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toogleFollowingProgress, requestUsers } from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/preloader';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsersSuperSelector } from '../../Redux/users-selectors';

class UsersContainer extends React.Component {
 
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize); //thunk в api.js
    } 

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize); //thunk в api.js
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


// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toogleFollowingProgress, requestUsers})
)(UsersContainer);