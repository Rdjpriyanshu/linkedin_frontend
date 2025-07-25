import React, { useContext } from "react"; // Added useContext import
import { userDataContext } from "../context/UserContext";

const EditProfile = () => {
  let { edit, setedit, userData, setUserData } = useContext(userDataContext);

  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] p-8 flex flex-col items-center gap-6 relative overflow-y-auto">
        {/* Fixed close button with onClick handler */}
        <div
          className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-gray-700 text-xl font-bold"
          onClick={() => setedit(false)}
        >
          &times;
        </div>

        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-200 shadow mb-2">
          <img
            src="../../assets/vkPhotoroom.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-blue-700 mb-2">Edit Profile</h2>

        <form className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={userData?.firstName || ""}
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={userData?.lastName || ""}
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium"
          />
          <input
            type="text"
            placeholder="Headline (e.g. Web Developer)"
            value={userData?.heading || ""}
            onChange={(e) =>
              setUserData({ ...userData, heading: e.target.value })
            }
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium"
          />
          <input
            type="text"
            placeholder="Location"
            value={userData?.location || ""}
            onChange={(e) =>
              setUserData({ ...userData, location: e.target.value })
            }
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium"
          />
          <select
            value={userData?.gender || ""}
            onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium bg-white"
          >
            <option value="" disabled>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* SKills */}
          <input
            type="text"
            placeholder="Skills (comma separated)"
            value={userData?.skills || ""}
            onChange={(e) => setUserData({ ...userData, skills: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium"
          />
        </form>

        <div className="w-full flex gap-4 mt-4">
          <button
            onClick={() => setedit(false)}
            className="flex-1 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition"
          >
            Save
          </button>
          <button
            onClick={() => setedit(false)}
            className="flex-1 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold shadow transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
