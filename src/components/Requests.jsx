import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { showToast } from '../slices/toastSlice';

const Requests = () => {
    const [requests, setRequests] = useState([]);

    const fetchRequests = async () => {
        try {
            const res = await axios.post(BASE_URL + "/requests", {}, {
                withCredentials: true
            });
            console.log(res);
            setRequests(res?.data?.data?.map(item => item))
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchRequests();
    }, []);

    const RequestCard = ({ user }) => {
        const { firstName, lastName, photoUrl, age, gender, about, skills } = user?.likerDetails;
        const dispatch = useDispatch();

        const handleAccept = async (likesData) => {
            try {
                console.log(likesData);
                const res = await axios.patch(BASE_URL + `/accept/${likesData._id}`, {}, {
                    withCredentials: true
                });
                dispatch(showToast({ success: "Request Accepted", error: '', info: '' }));
                fetchRequests();
            }
            catch (err) {
                console.error(err);
                dispatch(showToast({ success: '', error: err?.response?.data?.message || 'Request failed', info: '' }));
            }
        }
        const handleReject= async (likesData) => {
            try {
                console.log(likesData);
                const res = await axios.patch(BASE_URL + `/reject/${likesData._id}`, {}, {
                    withCredentials: true
                });
                dispatch(showToast({ success: "Request Rejected", error: '', info: '' }));
                fetchRequests();
            }
            catch (err) {
                console.error(err);
                dispatch(showToast({ success: '', error: err?.response?.data?.message || 'Request failed', info: '' }));
            }
        }

        return (
            <div className="flex justify-center items-center h-full mt-4">
                <div className="w-72 bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Profile Image */}
                    <figure>
                        <img
                            src={photoUrl ? photoUrl : "https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg"}
                            alt="Profile"
                            className="w-full h-60 object-cover"
                        />
                    </figure>

                    {/* Profile Details */}
                    <div className="p-3">
                        <h2 className="text-sm font-semibold">
                            {firstName}  {lastName}
                        </h2>
                        <p className="text-xs mt-1 text-gray-700">
                            {age},  {gender}
                        </p>
                        <p className="text-xs mt-1 text-gray-700">
                            {about}
                        </p>
                        <p className="text-xs mt-1 text-gray-700">
                            <span className="font-medium">Skills:</span>  {skills?.join(", ")}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex mt-2 justify-between">
                            <button onClick={() => handleReject(user.likesData)}
                                className="bg-gray-500 text-white px-3 py-1 rounded-md transform transition-transform duration-300 hover:scale-105 text-xs">
                                Reject
                            </button>
                            <button onClick={() => handleAccept(user.likesData)}
                                className={`bg-pink-500 text-white px-3 py-1 rounded-md transform transition-transform duration-300 text-xs hover:scale-105 '}`}
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {
                requests && requests?.map((item, index) => <RequestCard key={index} user={item} />)
            }
        </div>
    )
}

export default Requests