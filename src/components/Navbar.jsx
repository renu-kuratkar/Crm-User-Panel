import { motion } from "framer-motion";
import { Bell, ChatCenteredDots, CheckCircle, Moon, MagnifyingGlass, List } from "@phosphor-icons/react";

const Navbar = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className={`fixed top-0 bg-[#f8f9fa] text-white p-3 flex justify-between items-center z-20 transition-all duration-300 
      ${isOpen ? "w-[calc(100%-16rem)] left-64" : "w-[calc(100%-5rem)] left-20"}`}>

      {/* Sidebar Toggle Button */}
      <button onClick={toggleSidebar} className="p-2 rounded-md text-[rgb(10,58,92)] hover:bg-[#bdcedd] transition-all">
        <List size={25} />
      </button>

      {/* Search Bar */}
      <div className="flex items-center gap-2 w-full sm:w-auto ml-4 sm:ml-10">
        <span className="text-gray-400">
          <MagnifyingGlass className="text-[rgb(10,58,92)] cursor-pointer transition duration-300" size={23} />
        </span>
        <input
          type="text"
          placeholder="Search for files, reports and records"
          className="bg-white-800 text-black px-3 py-1 rounded-md w-full sm:w-60 md:w-80 focus:outline-none"
        />
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-4">
        <motion.div whileHover={{ rotate: 90, scale: 1.2 }} whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 300 }}>
          <div className="flex items-center justify-center p-1 rounded-xl transition-all duration-300 hover:bg-[#bdcedd] hover:scale-125 cursor-pointer">
            <Bell className="text-[rgb(10,58,92)] cursor-pointer transition duration-300 animate-custom-pulse" size={23} />
          </div>
        </motion.div>

        <div className="flex items-center justify-center p-1 rounded-xl transition-all duration-300 hover:bg-[#bdcedd] hover:scale-125 cursor-pointer">
          <ChatCenteredDots size={23} className="text-[rgb(10,58,92)]" />
        </div>

        <div className="flex items-center justify-center p-1 rounded-xl transition-all duration-300 hover:bg-[#bdcedd] hover:scale-125 cursor-pointer">
          <CheckCircle className="text-[rgb(10,58,92)] cursor-pointer transition duration-300" size={23} />
        </div>

        <div className="flex items-center justify-center p-1 rounded-xl transition-all duration-300 hover:bg-[#bdcedd] hover:scale-125 cursor-pointer">
          <Moon className="text-[rgb(10,58,92)] cursor-pointer transition duration-300" size={22} />
        </div>

        {/* Language & User Icon */}
        <div className="flex items-center justify-center p-1 rounded-xl transition-all duration-300 hover:bg-[#bdcedd] hover:scale-125 cursor-pointer">
          <img src="https://flagcdn.com/w40/gb.png" alt="Language" className="w-6 h-6 cursor-pointer rounded-full" />
        </div>
        <div className="flex items-center justify-center p-1 rounded-xl transition-all duration-300 hover:bg-[#bdcedd] hover:scale-125 cursor-pointer">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-8 h-8 rounded-full cursor-pointer"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
