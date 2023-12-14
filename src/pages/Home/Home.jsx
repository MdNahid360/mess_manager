import React from "react";
 import { Dropdown  } from 'flowbite-react';

const Home = () => {
  return (
    <div className="max-w-screen-xl overflow-hidden bg-white m-auto py-12">
      hello world
      
          <Dropdown label="Dropdown button" dismissOnClick={false}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
    </div>
  );
};

export default Home;
