import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
      <header className={s.header}>
        <img width='100px' src='https://www.shutterstock.com/image-vector/linked-letters-font-design-alphabet-600w-2031299810.jpg' />

        <div className={s.loginBlock} >
          { props.isAuth ? props.login :
          <NavLink to={'/login'}>Login</NavLink>}

        </div>
      </header>
  );
}

export default Header;
