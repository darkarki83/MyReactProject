import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
console.log(s);

const Navbar = () => {
  return (
      <div className={s.nav}>
        <div className={`${s.item}`}><NavLink to='/profile' activeclassname={s.activeLink}>Profile</NavLink></div>
        <div className={s.item}><NavLink to='/dialogs' activeclassname={s.activeLink} >Messages</NavLink></div>
        <div className={s.item}><NavLink to='/news'>News</NavLink></div>
        <div className={s.item}><NavLink to='/music'>Music</NavLink></div>
        <br/>
        <div className={s.item}><NavLink to='/users' >Find users</NavLink></div>
        <br/>
        <div className={s.item}><NavLink to='/settings' >Settings</NavLink></div>
      </div>
  );
}

export default Navbar;
