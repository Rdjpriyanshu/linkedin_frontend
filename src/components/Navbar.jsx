import React, { useContext } from 'react'
import { IoMdNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { HiMiniUsers } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { userDataContext } from '../context/userContext';
const Navbar = () => {
    // const [userData,setUserData]=useContext(userDataContext);


  return (
    <div className="w-full h-[80px] bg-gradient-to-r from-[#f9e6e6] to-[#e0f7fa] flex items-center justify-between px-8 shadow-b shadow-lg">
      {/* Left: Logo and Search */}
      <div className="flex items-center gap-6">
        <img
          src={"../../assets/logo2.png"}
          alt="Logo"
          className={`w-12 h-12 rounded-lg shadow border border-gray-200} bg-white p-1`}
        />
        <form
          className={`w-[260px] h-[38px] bg-white flex items-center gap-2 rounded-full px-4 shadow border border-gray-200 focus-within:ring-2 focus-within:ring-blue-200 transition }`}
        >
          <IoSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </form>
      </div>

      {/* Right: Navigation Links and Profile */}
      <div className="flex items-center justify-center gap-8 relative">
        <div className="w-[280px] h-[300px] bg-white shadow-lg absolute top-[70px] rounded-lg flex flex-col items-center p-[20px] gap-[20px]">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-200 shadow justify-center items-center">
            <img
              src="../../assets/vkPhotoroom.jpg"
              alt="Profile"
              className="w-full h-full object-cover "
            />
          </div>
          {/* seting the name of the person */}
          <div className='text-[18px] font-semibold text-grey-700'>
            {/* `${userData.firstName} ${userData.lastName}` */}
          </div>

        <button className='w-full h-[40px] rounded-full border-2 border-[#f9c160] text-[#2dc0ff] flex items-center justify-center '>
          View Profile
        </button>

        <div className='w-full h-[1px] bg-gray-700'> </div>


        </div>

        <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 cursor-pointer transition">
          <FaHome className="text-xl mb-1" />
          <span className="text-xs font-medium">Home</span>
        </div>
        <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 cursor-pointer transition">
          <HiMiniUsers className="text-xl mb-1" />
          <span className="text-xs font-medium">My Network</span>
        </div>
        <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 cursor-pointer transition">
          <IoMdNotifications className="text-xl mb-1" />
          <span className="text-xs font-medium">Notification</span>
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-200 shadow">
          <img
            src="../../assets/vkPhotoroom.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar
