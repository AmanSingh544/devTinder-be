import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { showToast } from '../slices/toastSlice';

const Card = ({ user, onUserAction }) => {
  const dispatch = useDispatch();
  const [isInterested, setIsInterested] = useState(false);

  const handleLikeClick = async () => {
    try {
      await axios.post(BASE_URL + `/interested/${user._id}`, {}, {
        withCredentials: true
      });
      dispatch(showToast({ success: "Request Sent", error: '', info: '' }));
      setIsInterested(true);
      onUserAction && onUserAction();
    } catch (err) {
      console.error(err);
      dispatch(showToast({ success: '', error: err?.response?.data?.message || 'Request failed', info: '' }));
    }
  };

  return (
    <div className="flex justify-center items-center h-full mt-4">
      <div className="w-72 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Profile Image */}
        <figure>
          <img
            src={user?.photoUrl ? user.photoUrl : "https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg"}
            alt="Profile"
            className="w-full h-60 object-cover"
          />
        </figure>

        {/* Profile Details */}
        <div className="p-3">
          <h2 className="text-sm font-semibold">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-xs mt-1 text-gray-700">
            {user?.age}, {user?.gender}
          </p>
          <p className="text-xs mt-1 text-gray-700">
            {user?.about}
          </p>
          <p className="text-xs mt-1 text-gray-700">
            <span className="font-medium">Skills:</span> {user?.skills?.join(", ")}
          </p>

          {/* Action Buttons */}
          <div className="flex mt-2 justify-between">
            <div class="relative group inline-block">

              <div class="absolute -top-5 left-1/2 -translate-x-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200  bg-black text-white text-xs py-1 px-2 rounded-md">
                Dislike
              </div>
              {/* <div class="rounded-full border-2 border-black p-0 inline-block"> */}
              <button class="text-white px-3 py-1 rounded-md transform transition-transform duration-300 hover:scale-105 text-xs">
                <img height="40" width="40" src="https://img.icons8.com/?size=96&id=T9nkeADgD3z6&format=png" />
              </button>
              {/* </div> */}
            </div>

            <div className="relative group inline-block ml-4">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-pink-500 text-white text-xs py-1 px-2 rounded-md pointer-events-none">
                Like
              </div>
              <button
                onClick={() => handleLikeClick()}
                className="px-3 py-1 rounded-md transform transition-transform duration-300 hover:scale-105 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={false} 
              >
                <img height="40" width="40" src="https://img.icons8.com/?size=96&id=DFU1kReSUccu&format=png" />
              </button>
            </div>



          </div>
        </div>
      </div>
    </div >
  );
};

export default Card;