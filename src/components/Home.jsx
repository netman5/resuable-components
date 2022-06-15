import React from 'react';
import Button from './Button';

const Home = () => {
  const name = 'John';
  return (
    <div>
      <h1>Home</h1>
      {name}
      <Button
        buttonText="testing"
        className="h-10 px-6 font-semibold rounded-md bg-sky-500 text-white"
        type="button"
      />
    </div>
  );
};

export default Home;
