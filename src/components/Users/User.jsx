import React from 'react';
import userPhoto from "./../../assets/images/user_image.png"
import classes from './users.module.css';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {
    let u = user;
    return (<div>
        <span>
            <div>
                <NavLink to={'/Profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.userPhoto} />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id); //thunk в api.js
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id); //thunk в api.js
                    }}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </span>
        </span>
    </div>)
}

export default User;