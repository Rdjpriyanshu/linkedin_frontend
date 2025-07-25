import React from 'react'

const EditProfile = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 flex flex-col items-center gap-6 relative">
        <div className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-gray-700 text-xl font-bold">&times;</div>
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-200 shadow mb-2">
          <img src="../../assets/vkPhotoroom.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Edit Profile</h2>
        <form className="w-full flex flex-col gap-4">
          <input type="text" placeholder="First Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium" />
          <input type="text" placeholder="Last Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium" />
          <input type="text" placeholder="Headline (e.g. Web Developer)" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium" />
          <input type="text" placeholder="Location" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium" />
        </form>
        <div className="w-full flex gap-4 mt-4">
          <button className="flex-1 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition">Save</button>
          <button className="flex-1 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold shadow transition">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
