import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/Profile" activeClassName={classes.active}>Profile</NavLink>
      </div><div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/Users" activeClassName={classes.active}>Users</NavLink>
      </div><div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/Dialogs" activeClassName={classes.active}>Massages</NavLink>
      </div><div className={classes.item}>
        <NavLink to='/News' activeClassName={classes.active}>News</NavLink>
      </div><div className={classes.item}>
        <NavLink to='/Music' activeClassName={classes.active}>Music</NavLink>
      </div><div className={classes.item}>
        <NavLink to='/Setting' activeClassName={classes.active}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;