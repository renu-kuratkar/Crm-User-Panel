import { useState } from "react";
import { FaBars, FaUserCircle, FaBell, FaSearch } from "react-icons/fa";
import { MdOutlineDashboard, MdAnalytics, MdMail, MdPhoto, MdSettings } from "react-icons/md";

const SidebarNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-blue-900 text-white ${sidebarOpen ? "w-64" : "w-20"} transition-all duration-300`}>
        <div className="flex items-center justify-between p-4">
          <h1 className={`text-xl font-bold ${!sidebarOpen && "hidden"}`}>Beyonder Admin</h1>
          <FaBars className="cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)} />
        </div>

        <nav className="mt-4">
          <SidebarItem icon={MdOutlineDashboard} text="Dashboard" sidebarOpen={sidebarOpen} />
          <SidebarItem icon={MdAnalytics} text="Analytics" sidebarOpen={sidebarOpen} />
          <SidebarItem icon={MdMail} text="Mail" sidebarOpen={sidebarOpen} />
          <SidebarItem icon={MdPhoto} text="Photos" sidebarOpen={sidebarOpen} />
          <SidebarItem icon={MdSettings} text="Settings" sidebarOpen={sidebarOpen} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <nav className="bg-white p-4 shadow-md flex justify-between items-center">
          <div className="relative">
            <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-full focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <FaBell className="text-gray-600 cursor-pointer" />
            <FaUserCircle className="text-gray-600 cursor-pointer text-2xl" />
          </div>
        </nav>

        {/* Page Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-gray-600">Welcome to the analytics dashboard.</p>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon: Icon, text, sidebarOpen }) => (
  <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-blue-800 transition">
    <Icon className="text-lg" />
    {sidebarOpen && <span>{text}</span>}
  </div>
);

export default SidebarNavbar;
