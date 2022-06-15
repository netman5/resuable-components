import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ name, path }) => (
  <Link
    to={path}
    className="text-indigo-500 hover:text-indigo-500 inline-flex items-center px-1 pt-1 rounded-md text-sm font-semibold leading-5"
  >
    {name}
  </Link>
);

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavItem;
