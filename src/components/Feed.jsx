import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../slices/feedSlice';
import Card from './Card';

const Feed = () => {
  const dispatch = useDispatch();
  const readFeed = useSelector(state => state.feed);

  const fetchFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + '/feed', {
        withCredentials: true // to save cookies in browser
      });
      dispatch(addFeed(res?.data?.data));
      console.log(res)
    }
    catch (err) {
      console.error(err);
    };
  };
  useEffect(() => {
    if(!readFeed)
    fetchFeed();
  }, []);

  return (
    <div><Card user={readFeed}/></div>
  )
}

export default Feed