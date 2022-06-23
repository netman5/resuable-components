import React from 'react';
import Menu from '../Icons/Icons';

const NavBar = () => {
  const user = 'loko';
  console.log(user);

  return (
    <nav>
      <a href="/">TestCom</a>
      <Menu />
    </nav>
  );
};

export default NavBar;
