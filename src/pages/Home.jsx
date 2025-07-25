import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { userDataContext } from '../context/userContext';
import { GiPencil } from "react-icons/gi";
import EditProfile from '../components/EditProfile';
function Home() {
  let {userData,setUserData}=useContext(userDataContext);
  return (
    <div className="w-full min-h-[100vh] bg-[#d9f1f7]">
      {/* Navbar fixed at top */}
      <div className="w-full shadow-b shadow-lg bg-white fixed top-0 z-50">
       <EditProfile/>
        <Navbar />
      </div>
      {/* Main content grid */}
      <div className="max-w-7xl relative mx-auto pt-[100px] px-4 flex gap-6 justify-between">
        {/* Left: Profile/Edit */}
        <div className="w-[300px] min-h-[300px] bg-white rounded-xl shadow-lg p-5 flex flex-col items-center gap-4">
          <div className="w-[100%] h-[150px] rounded overflow-hidden  bg-gray-400 border-2 flex items-center justify-center">
            <img src="" alt="" className="w-full" />
          </div>
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden items-center justify-center absolute top-[220px]">
            <img
              src="../../assets/vkPhotoroom.jpg"
              alt="Profile"
              className=" h-full "
            />
          </div>

          <div className="text-lg font-semibold text-gray-800">{`${userData.firstName} ${userData.lastName}`}</div>
          <div className="text-[16px] font-semibold text-blue-500">
            {userData.heading || ""}
          </div>
          <div className="text-[16px] font-semibold text-blue-500">
            {userData.location}
          </div>
          <button className="w-full py-2 rounded-full border-2 border-[#f9c160] text-[#2dc0ff] font-semibold hover:bg-blue-50 transition justify-center items-center ">
            <span className="font-bold">Edit Profile</span>
         
          </button>
        </div>
        {/* Center: Post */}
        <div className="flex-1 h-[250px] bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
          <div className="font-semibold text-xl text-gray-700 mb-2">
            Start a post
          </div>
          <textarea
            className="w-full min-h-[80px] border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
            placeholder="What's on your mind?"
          />
          <button className="self-end px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition">
            Post
          </button>
        </div>
        {/* Right: LinkedIn News */}
        <div className="w-[300px] min-h-[300px] bg-white rounded-xl shadow-lg p-5 flex flex-col gap-3">
          <div className="font-semibold text-lg text-blue-700 mb-2">
            LinkedIn News
          </div>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="font-medium">• AI is transforming the workplace</li>
            <li className="font-medium">• Top skills for 2025</li>
            <li className="font-medium">• Remote work trends</li>
            <li className="font-medium">• Market updates</li>
            <li className="font-medium">• Career growth tips</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home
