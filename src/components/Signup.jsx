import React from 'react'
import Card from './Card';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { showToast } from '../slices/toastSlice';

const Signup = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [gender, setGender] = React.useState("");
    const [skills, setSkills] = React.useState([]);
    const [photoUrl, setPhotoUrl] = React.useState("");
    const [about, setAbout] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [emailId, setEmailId] = React.useState("");
    const [error, setError] = React.useState("");

    const dispatch = useDispatch();

    const handleSkillsChange = (e) => {
        setSkills(e.target.value.split(","));
    }

    const handlePassword = (value) => {
        setConfirmPassword(value);
        if (password !== value) {
            setError("Password not matched !");
        }
        else {
            setError("");
        }
    }

    const handleSignUp = async () => {
        // if validations aree passed and
        try{
            if (password === confirmPassword) {
                // call signup api
                const res = await axios.post(BASE_URL + '/signup', {
                    firstName,
                    lastName,
                    emailId,
                    password,
                    age,
                },);
                console.log(res);
                dispatch(showToast({success:res?.data?.message, error:'',info:''}));    
            }
        }
        catch(err){
            console.error(err);
            dispatch(showToast({success:"", error:err?.response?.data?.message ?? err?.message ,info:''}));
        }
    }

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">

                <div onSubmit={handleSignUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-4">

                    {/* Left Section - Edit Profile */}
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
                            Sign Up
                        </h2>

                        {/* First Name */}
                        <div className="mb-3">
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                First Name
                            </label>
                            <input
                                value={firstName}
                                required={true}
                                onChange={(e) => setFirstName(e.target.value)}
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
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs"
                            />
                        </div>

                        {/* Email ID*/}
                        <div className="mb-3">
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Email Id
                            </label>
                            <input
                                value={emailId}
                                required={true}
                                onChange={(e) => setEmailId(e.target.value)}
                                type="email"
                                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type='password'
                                value={password}
                                required={true}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-3">
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <input
                                type='password'
                                value={confirmPassword}
                                required={true}
                                onChange={(e) => handlePassword(e.target.value)}
                                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs"
                            />
                            {error && (<p className='block text-xs text-red-800'>{error}</p>)}
                        </div>

                        {/* Age */}
                        <div className="mb-3">
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                Age
                            </label>
                            <input
                                value={age}
                                required={true}
                                onChange={(e) => setAge(parseInt(e.target.value, 10) || 0)}
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
                                value={gender}
                                required={true}
                                onChange={(e) => setGender(e.target.value)}
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
                                value={skills?.join(",")}
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
                                value={photoUrl}
                                onChange={(e) => setPhotoUrl(e.target.value)}
                                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs"
                            />
                        </div>

                        {/* About */}
                        <div className="mb-3">
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                About
                            </label>
                            <textarea
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs"
                                rows="2"
                            ></textarea>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end">
                            <button onClick={handleSignUp}
                                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-xs"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                    {/* Right Section - Profile Card */}
                    
                    <div className="p-4 items-center justify-center">
                    <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
                           Profile Preview
                        </h2>
                        <Card user={{ firstName, lastName, emailId, age, gender, about, photoUrl, skills }} />
                    </div>
                </div></div>
        </div>
    )
}

export default Signup