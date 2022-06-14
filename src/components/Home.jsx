import React from 'react';
import Button from './Button';

const Home = () => {
    const name = 'John';
  return (
    <div>
        <h1>Home</h1>
        {name}
        <Button buttonText="testing" />
    </div>
  );
};

export default Home;
