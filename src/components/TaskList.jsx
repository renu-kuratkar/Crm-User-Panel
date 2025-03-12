import React from "react";
import { FaPlay, FaPause, FaClock } from "react-icons/fa";

const tasks = [
  { id: 1, time: "7:00 AM", title: "Search Inspiration For Project", link: "www.dribbble.com", icon: <FaPlay className="text-green-500" />, progressColor: "bg-green-500" },
  { id: 2, time: "8:03 AM", title: "Look for Project Ideas", link: "www.dribbble.com", icon: <FaPause className="text-purple-500" />, progressColor: "bg-purple-500" },
  { id: 3, time: "4:12 AM", title: "How can I find inspiration?", link: "www.dribbble.com", icon: <FaPlay className="text-orange-500" />, progressColor: "bg-orange-500" },
  { id: 4, time: "7:30 AM", title: "Can I execute my idea?", link: "www.dribbble.com", icon: <FaPlay className="text-green-500" />, progressColor: "bg-green-500" },
];

const leads = [
  { id: 1, name: "Risa Pearson", email: "richard.john@mail.com", image: "https://randomuser.me/api/portraits/women/1.jpg", status: "Cold lead", statusColor: "bg-yellow-100 text-yellow-600" },
  { id: 2, name: "Margaret D. Evans", email: "margaret.evans@rhyta.com", image: "https://randomuser.me/api/portraits/women/2.jpg", status: "Lost lead", statusColor: "bg-red-100 text-red-600" },
  { id: 3, name: "Bryan J. Luellen", email: "bryuellen@dayrep.com", image: "https://randomuser.me/api/portraits/men/3.jpg", status: "Won lead", statusColor: "bg-green-100 text-green-600" },
  { id: 4, name: "Kathryn S. Collier", email: "collier@jourrapide.com", image: "https://randomuser.me/api/portraits/women/4.jpg", status: "Cold lead", statusColor: "bg-yellow-100 text-yellow-600" },
];

const TaskList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
        {/* Task List Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Tasks</h2>
          <div className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <div key={task.id} className="flex flex-col sm:flex-row items-center sm:justify-between py-4 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">{task.icon}</div>
                  <div>
                    <p className="text-sm font-medium">Begin from</p>
                    <p className="text-gray-500 text-sm">{task.time}</p>
                  </div>
                </div>
                <div className="text-center sm:text-left flex-1 sm:ml-4 w-full">
                  <p className="text-sm font-semibold">{task.title}</p>
                  <p className="text-gray-500 text-sm break-all">{task.link}</p>
                </div>
                <div className="w-full sm:w-32 bg-gray-200 h-2 rounded-full relative">
                  <div className={`h-2 rounded-full ${task.progressColor} w-1/2`}></div>
                </div>
                <div className="mt-3 sm:mt-0 w-full sm:w-auto">
                  <button className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition w-full">
                    <FaClock />
                    <span>Reminder</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leads List Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">RECENT LEADS</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <span className="text-xl">⋮</span>
            </button>
          </div>
          <div className="divide-y divide-gray-200">
            {leads.map((lead) => (
              <div key={lead.id} className="flex flex-col sm:flex-row items-center sm:justify-between space-y-3 sm:space-y-0 py-3">
                <div className="flex items-center space-x-4">
                  <img src={lead.image} alt={lead.name} className="w-10 h-10 rounded-full" />
                  <div className="text-center sm:text-left">
                    <p className="font-medium text-gray-900">{lead.name}</p>
                    <p className="text-sm text-gray-500 break-all">{lead.email}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${lead.statusColor} w-24 text-center`}>{lead.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
