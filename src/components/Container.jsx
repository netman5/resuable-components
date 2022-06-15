import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

const Container = ({ children, className = '' }) => (
  <>
    <NavBar />
    <div className={`px-4 py-2 mx-auto max-w-7x1 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-3x1 mx-auto">{children}</div>
    </div>
  </>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Container;
