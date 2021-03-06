import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
        {
            props.users.map(u => <User user={u} unfollow={props.unfollow} follow={props.follow} followingInProgress={props.followingInProgress} key={u.id} />)
        }
    </div>
}

export default Users;