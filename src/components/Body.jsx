import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, removeUser } from '../slices/userSlice';
import { removeFeed } from '../slices/feedSlice';
import { showToast } from '../slices/toastSlice';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 // check if user present in store or not
  const user = useSelector((state) => state.user);
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + '/profile/view', {
        withCredentials: true // to save cookies in browser
      });
      dispatch(adduser(res?.data?.data));
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

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, {
        withCredentials: true
      });
      dispatch(removeUser());
      dispatch(removeFeed());
      dispatch(showToast({success:"User logged out",error:'',info:''}));
      return navigate("/login");
    }
    catch (err) {
      console.error(err);
      dispatch(showToast({success:'',error:err?.response?.data?.data.message,info:''}));
    }
  }
  return (
    <>
      <Navbar handleLogout={handleLogout} />
      {/* to show the children routes here, (for ex- Body here) use Outlet */}
      <div className="overflow-auto"  style={{height:"70vh", maxHeight: 'calc(90vh - 100px)'}}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Body;