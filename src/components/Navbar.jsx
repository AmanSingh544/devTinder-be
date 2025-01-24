import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const user = useSelector(state => state.user); // using the stored data from the store

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow">
      <div className="flex-1">
        <a className="text-xl font-semibold text-gray-800">DevTinder</a>
      </div>
      <div className="flex items-center gap-4">
        {/* <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-24 md:w-auto rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div> */}
        {user &&
          <>
            <p>Welcome, {user.firstName}</p>
            <div className="relative">
              <div
                role="button"
                className="flex items-center justify-center rounded-full bg-gray-200 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-5"
                onClick={toggleDropdown}
              >
                <img
                  alt="User avatar"
                  src={user?.photoUrl}
                  className="h-10 w-10 rounded-full"
                />
              </div>
            </div>
          </>}
        {isDropdownOpen && (
          <ul className="absolute right-0 mt-2 w-52 rounded-lg bg-white p-2 shadow-lg">
            <li className="flex items-center justify-between px-4 py-2 hover:bg-gray-100">
              <a href="#" className="text-sm text-gray-700">
                Profile
              </a>
              <span className="ml-2 rounded bg-blue-500 px-2 py-1 text-xs text-white">
                New
              </span>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#" className="text-sm text-gray-700">
                Settings
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#" className="text-sm text-gray-700">
                Logout
              </a>
            </li>
          </ul>
        )}
      </div>
    </div >
  );
}
