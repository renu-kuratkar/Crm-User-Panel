import React from "react";
import Cards from "./Cards";

const NewCards = () => {
  return (
    <div className="flex flex-wrap gap-6 bg-gray-100 p-6 rounded-lg w-full max-w-7xl mx-auto">
      {/* Left Section - Profile Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full sm:w-[380px] flex flex-col items-center">
        <h2 className="text-blue-600 text-lg font-semibold mt-4">Welcome Back!</h2>
        <p className="text-gray-400 text-sm">Adia Dashboard</p>
        <img
          className="w-20 h-20 rounded-full mx-auto"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
        />
        <h3 className="text-lg font-semibold mt-2">Henry Pr...</h3>
        <p className="text-gray-500 text-sm">UI/UX Des...</p>
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
          View Profile →
        </button>
      </div>

      {/* Right Section - Stats Cards & Cards Component */}
      <div className="flex-1 flex flex-col gap-6 w-full">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg shadow-md text-center">
            <p className="text-gray-500 text-sm">Orders</p>
            <div className="flex items-center justify-center mt-1">
              <span className="bg-blue-600 p-1.5 rounded-full text-white text-sm">📦</span>
            </div>
            <h4 className="text-lg font-bold mt-1">1,235</h4>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-md text-center">
            <p className="text-gray-500 text-sm">Revenue</p>
            <div className="flex items-center justify-center mt-1">
              <span className="bg-blue-600 p-1.5 rounded-full text-white text-sm">💰</span>
            </div>
            <h4 className="text-lg font-bold mt-1">$35,723</h4>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-md text-center">
            <p className="text-gray-500 text-sm">Average Price</p>
            <div className="flex items-center justify-center mt-1">
              <span className="bg-blue-600 p-1.5 rounded-full text-white text-sm">🏷️</span>
            </div>
            <h4 className="text-lg font-bold mt-1">$16.2</h4>
          </div>
        </div>

        {/* Cards Component Below Stats Cards */}
        <div className="w-full">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default NewCards;
