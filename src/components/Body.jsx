import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { adduser } from '../slices/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // check if user present in store or not
  const user = useSelector((state) => state.user);
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + '/profile/view',{
        withCredentials: true // to save cookies in browser
     });
      dispatch(adduser(res?.data));
    }
    catch (err) {
      console.error(err);
      navigate("/login");
    };
  }
  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user]);
  
  console.log('Body loads',user)
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