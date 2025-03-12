import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content Area */}
      <div className={`flex flex-col w-full transition-all duration-300 ${open ? "ml-64" : "ml-20"}`}>
        {/* Navbar */}
        <Navbar open={open} />

        {/* Main Content */}
        <div className="mt-16 p-6 bg-gray-100 h-full">
          <h1 className="text-2xl font-bold text-gray-700">Welcome to the Dashboard</h1>
          <p className="text-gray-500 mt-2">Here is your main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
