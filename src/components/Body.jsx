import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Body = () => {
  return (
    <>
      <Navbar />
      {/* to show the children routes here, (for ex- Body here) use Outlet */}
      <Outlet />
      <Footer /> 
    </>
  );
};

export default Body;