import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { adduser } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';

const Login = () => {

  const [emailId, setEmailId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(BASE_URL + '/login', {
        emailId,
        password
      },{
        withCredentials: true // to save cookies in browser  
      });
      console.log(response);
      dispatch(adduser(response.data?.data)); // saving in the store
      navigate("/");
    }
    catch (err) {
      navigate("/login");
      console.error(err)
    };
  }

  return (
    <div className="flex justify-center items-center my-10 w-full">
      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        {/* <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="w-full h-48 object-cover"
        />
      </figure> */}

        {/* Card Body */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 flex justify-center">Login</h2>
          <div>
            <div className="w-full mx-auto mt-4">
              {/* Top Labels */}
              <div className="flex justify-between mb-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Email ID
                </label>
              </div>

              {/* Input Field */}
              <input
                id="emailId"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                type="text"
                // placeholder="Type here"
                className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

          </div>
          <div>
            <div className="w-full mx-auto mt-4">
              {/* Top Labels */}
              <div className="flex justify-between mb-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Password
                </label>
              </div>

              {/* Input Field */}
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                // placeholder="Type here"
                className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

          </div>
          <div className="mt-4 flex justify-end">
            <button onClick={handleLogin } className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login