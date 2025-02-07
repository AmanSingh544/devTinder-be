import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    const getFriends = async () => {
        const res = await axios.get(BASE_URL + "/friends", {
            withCredentials: true
        });
        console.log(res?.data?.data)
        setFriends(res?.data?.data)
    };

    useEffect(() => {
        getFriends();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {friends.length > 0 &&
                friends.map((friend) => (
                    <div
                        key={friend._id}
                        className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={friend.photoUrl}
                            alt={`${friend.firstName}'s profile`}
                            className="w-full h-40 object-cover object-top rounded-t-xl"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-semibold text-gray-800">{friend.firstName}</h2>
                            <p className="text-gray-600 text-sm mt-2">{friend.about}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Friends;