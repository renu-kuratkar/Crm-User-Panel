import React from "react";
import { FaRegCalendarCheck, FaBriefcase, FaUsers, FaTasks, FaDollarSign, FaChartLine, FaUserTie, FaUserPlus } from "react-icons/fa";

const cardData = [
  { title: "Attendance", value: "92/99", change: "+2.1%", icon: <FaRegCalendarCheck />, color: "bg-orange-500", changeColor: "text-green-500" },
  { title: "Total Projects", value: "90/94", change: "-2.1%", icon: <FaBriefcase />, color: "bg-gray-700", changeColor: "text-red-500" },
  { title: "Total Clients", value: "69/86", change: "-11.2%", icon: <FaUsers />, color: "bg-blue-500", changeColor: "text-red-500" },
  { title: "Total Tasks", value: "25/28", change: "+11.2%", icon: <FaTasks />, color: "bg-pink-500", changeColor: "text-green-500" },
  // { title: "Earnings", value: "$2144", change: "+10.2%", icon: <FaDollarSign />, color: "bg-purple-500", changeColor: "text-green-500" },
  // { title: "Profit This Week", value: "$5,544", change: "+2.1%", icon: <FaChartLine />, color: "bg-red-500", changeColor: "text-green-500" },
  // { title: "Job Applicants", value: "98", change: "+2.1%", icon: <FaUserTie />, color: "bg-green-500", changeColor: "text-green-500" },
  // { title: "New Hire", value: "45/48", change: "-11.2%", icon: <FaUserPlus />, color: "bg-black", changeColor: "text-red-500" },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-5 flex flex-col items-start">
          {/* Icon */}
          <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${card.color} text-xl`}>
            {card.icon}
          </div>
          
          {/* Title */}
          <h3 className="mt-2 text-gray-600">{card.title}</h3>
          
          {/* Value & Change */}
          <div className="flex items-center mt-1 space-x-2">
            <span className="text-xl font-bold">{card.value}</span>
            <span className={`text-sm font-medium ${card.changeColor}`}>{card.change}</span>
          </div>
          
          {/* View Link */}
          <a href="#" className="mt-2 text-blue-500 text-sm">View All</a>
        </div>
      ))}
    </div>
  );
};

export default Cards;
