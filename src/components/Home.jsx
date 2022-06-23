/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from './Button';
import Container from './Container';
import Input from './Form/Input';
import FormInput from './Form/FormInput';
import Table from './Tasks/Table';
import Buttons from './Form/Button';
import ConfirmModal from './Modals/ConfirmModal';
// import PrimaryButton from './Form/PrimaryButton';
import NavBar from './NavBar/NavBar';

const Home = () => {
  const intial = {
    name: '',
    surname: '',
    email: '',
    phone: '',
  };
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(intial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue, [name]: value,
    });
  };
  const data = [
    { id: '1', title: 'Task 1', description: 'Task 1 description' },
    { id: '2', title: 'Task 2', description: 'Task 2 description' },
    { id: '3', title: 'Task 3', description: 'Task 3 description' },
  ];

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <NavBar />
      {isOpen && <ConfirmModal message="are you sure?" isOpen={isOpen} openModal={openModal} closeModal={closeModal} />}
      <Container className="container">
        <h1>Home</h1>
        <Button
          buttonText="testing"
          className="h-10 px-6 font-semibold rounded-md bg-sky-500 text-white"
          type="button"
          onClick={() => openModal()}
          loading={false}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter Email"
          disabled={false}
          value={inputValue.email}
          onChange={handleChange}
          required
          className="appearance-none block min-w-max px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />

        <Input
          label="Phone"
          type="email"
          name="phone"
          placeholder="Enter Email"
          disabled={false}
          value={inputValue.phone}
          onChange={handleChange}
          required
          className="appearance-none block min-w-max px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
        <FormInput
          type="text"
          name="name"
          placeholder="Enter Name"
          value={inputValue.name}
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="surname"
          placeholder="Enter Surname"
          value={inputValue.surname}
          onChange={handleChange}
        />
        <div className="flex w-80 justify-between">
          <Buttons size="h-10 px-6 mt-2 w-55" variant="bg-green-500 text-white rounded-md font-semibold" type="button">Sucess</Buttons>
          <Buttons size="h-10 px-6 mt-2 w-55" variant="bg-red-500 text-white rounded-md font-semibold" type="button">Error</Buttons>
          <Buttons size="h-10 px-6 mt-2 w-55" variant="bg-gray-500 text-white rounded-md font-semibold" type="button">Warning</Buttons>
        </div>
        <Table data={data} />
        <div>
          <p>{inputValue.email}</p>
          <p>{`${inputValue.name} ${inputValue.surname}`}</p>
          <p>
            Contact detail:
            {inputValue.phone}

          </p>
        </div>

        {/* <PrimaryButton buttonText="Submit" height="20px" width="50px" border="border" background="bg-sky-200" /> */}
      </Container>
    </div>
  );
};

export default Home;
