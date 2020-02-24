import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://vk.com/images/brand/vk-logo--fb.png"></img>

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/Login'}>Login</NavLink>
            
            }
            </div>
        </header>)
}

export default Header;