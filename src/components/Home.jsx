import React from 'react';
import Button from './Button';
import Container from './Container';
import Input from './Input';
import Table from './Tasks/Table';

const Home = () => {
  const name = 'John';
  const data = [
    { id: 1, title: 'Task 1', description: 'Task 1 description' },
    { id: 2, title: 'Task 2', description: 'Task 2 description' },
    { id: 3, title: 'Task 3', description: 'Task 3 description' },
  ];
  return (
    <div>
      <Container className="container">
        <h1>Home</h1>
        {name}
        <Button
          buttonText="testing"
          className="h-10 px-6 font-semibold rounded-md bg-sky-500 text-white"
          type="button"
          onClick={() => console.log('hello')}
          loading={false}
        />
        <Input type="text" placeholder="Enter Email" />
        <Table data={data} />
      </Container>
    </div>
  );
};

export default Home;
