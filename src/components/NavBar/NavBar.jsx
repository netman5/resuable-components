/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../Icons/Icons';
import styles from './NavBar.module.css';

const NavBar = ({ links }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={styles.navigation}>
      <a href="/" className={styles.brandName}>TestCom</a>
      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <Menu />

      </button>
      <div className={isNavExpanded ? `${styles.navigationMenu} ${styles.expanded}` : styles.navigationMenu}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                onClick={() => setIsNavExpanded(!isNavExpanded)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default NavBar;
