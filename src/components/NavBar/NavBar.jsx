/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Menu from '../Icons/Icons';
import styles from './NavBar.module.css';

const NavBar = () => {
  const user = 'loko';
  console.log(user);

  return (
    <nav className={styles.navigation}>
      <a href="/" className={styles.brandName}>TestCom</a>
      <button type="button" className={styles.hamburger}><Menu /></button>
      <div className={styles.navigationMenu}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
