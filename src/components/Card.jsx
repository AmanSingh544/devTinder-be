import React from 'react';

const Card = ({ user }) => {
    return (
        <div className="flex justify-center items-center h-full mt-4">
          <div className="w-72 bg-white shadow-md rounded-lg overflow-hidden">
            {/* Profile Image */}
            <figure>
              <img
                src={user?.photoUrl}
                alt="Profile"
                className="w-full h-60 object-cover"
              />
            </figure>
      
            {/* Profile Details */}
            <div className="p-3">
              <h2 className="text-sm font-semibold">
                {user?.firstName} {user?.lastName}
              </h2>
              <p className="text-xs text-gray-600">
                {user?.age}, {user?.gender}
              </p>
      
              {/* About */}
              <p className="text-xs mt-1 text-gray-700">
                {user?.about}
              </p>
      
              {/* Skills */}
              <p className="text-xs mt-1 text-gray-700">
                <span className="font-medium">Skills:</span> {user?.skills?.join(", ")}
              </p>
      
              {/* Action Buttons */}
              <div className="flex mt-2 justify-between">
                <button className="bg-gray-500 text-white px-3 py-1 rounded-md transform transition-transform duration-300 hover:scale-105 text-xs">
                  Ignore
                </button>
                <button className="bg-pink-500 text-white px-3 py-1 rounded-md transform transition-transform duration-300 hover:scale-105 text-xs">
                  Interested
                </button>
              </div>
            </div>
          </div>
        </div>
      );
      
};

export default Card;