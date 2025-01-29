import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addFeed } from "../slices/feedSlice";
import ToastNotification from "./Toast";
import { showToast } from "../slices/toastSlice";

const EditProfile = (props) => {
    const userdata = props.user;
    const [user, setUser] = useState(userdata);
    const [toastInfo, setToastInfo] = useState({});

    const dispatch = useDispatch();

    const handleSkillsChange = (e) => {
        setUser({ ...user, "skills": (e.target.value.split(",").map((skill) => skill.trim())) })
    }

    const handleSaveProfile = async () => {
        try {
            const res = await axios.patch(BASE_URL + '/profile/edit',
                user,
                {
                    withCredentials: true
                });
            dispatch(addFeed(res?.data?.data));
            dispatch(showToast({success: res?.data?.message, error:'',info:''}));
            console.log(res);
        }
        catch (err) {
            dispatch(showToast({success:"", error:err?.response?.data?.message ?? err?.message ,info:''}));
            console.error(err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-4">
            
            {/* Left Section - Edit Profile */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
                Edit Profile
              </h2>
      
              {/* First Name */}
              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  value={user?.firstName}
                  onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                  type="text"
                  className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs"
                />
              </div>
      
              {/* Last Name */}
              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  value={user?.lastName}
                  onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                  type="text"
                  className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs"
                />
              </div>
      
              {/* Age */}
              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Age
                </label>
                <input
                  value={user?.age}
                  onChange={(e) => setUser({ ...user, age: parseInt(e.target.value, 10) || 0 })}
                  type="number"
                  className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs"
                />
              </div>
      
              {/* Gender */}
              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  id="gender"
                  value={user?.gender}
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                  className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
      
              {/* Skills */}
              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Skills (comma-separated)
                </label>
                <input
                  value={user?.skills?.join(",")}
                  onChange={handleSkillsChange}
                  type="text"
                  className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs"
                />
              </div>
      
              {/* Photo URL */}
              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Photo URL
                </label>
                <input
                  value={user?.photoUrl}
                  onChange={(e) => setUser({ ...user, photoUrl: e.target.value })}
                  className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs"
                />
              </div>
      
              {/* About */}
              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  About
                </label>
                <textarea
                  value={user?.about}
                  onChange={(e) => setUser({ ...user, about: e.target.value })}
                  className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs"
                  rows="2"
                ></textarea>
              </div>
      
              {/* Save Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleSaveProfile}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-xs"
                >
                  Save Profile
                </button>
              </div>
            </div>
            {/* Right Section - Profile Card */}
            <div className="p-4 flex items-center justify-center">
              <Card user={{ ...user }} />
            </div>
            <ToastNotification toastInfo={toastInfo} />
          </div>
        </div>
      );
      
      
};

export default EditProfile;