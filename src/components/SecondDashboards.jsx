import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";


const activeUsersData = [
  { name: "25 June", views: 80 },
  { name: "26 June", views: 140 },
  { name: "27 June", views: 60 },
];

const categoryData = [
  { name: "Mobile", value: 40, color: "#FFA500" },
  { name: "Laptop", value: 30, color: "#FF0000" },
  { name: "Electronics", value: 50, color: "#00008B" },
  { name: "Others", value: 36, color: "#9370DB" },
];

const SecondDashboard = () => {
  return (
    <div className="p-4 bg-gray-100 mt-0 pt-0"> 
      {/* Grid Layout for Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Orders & Active Users */}
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <div className="text-blue-600 font-semibold text-lg">1,860 / 3k Target</div>
              <p className="text-gray-500">Orders in Period</p>
            </div>
            <div className="bg-blue-500 text-white text-xs p-2 rounded-full">62%</div>
          </div>
          
          {/* Active Users Bar Chart */}
          <h3 className="text-gray-600 text-sm mt-4">Active Users</h3>
          <p className="text-xs text-gray-400">Pages views per day</p>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart data={activeUsersData}>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="views" fill="#6366F1" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-2 text-right">👤 200</p>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-gray-600 text-sm mb-3">Upcoming Events</h3>
          <ul>
            {[
              { date: "30 JUN, TUE", event: "Big Billion Day Sale" },
              { date: "09 JULY, MON", event: "5% Off on Mobile" },
              { date: "15 AUG, SUN", event: "Electronics Sale" },
              { date: "26 OCT, THU", event: "Fashionable Sale" },
              { date: "25 DEC, FRI", event: "5% Off on Cloths" },
            ].map((item, index) => (
              <li key={index} className="flex justify-between py-2 border-b text-sm">
                <span className="text-gray-500">{item.date}</span>
                <span className="font-semibold">{item.event}</span>
              </li>
            ))}
          </ul>
          <button className="mt-3 bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded">See All</button>
        </div>

        {/* Popular Categories Pie Chart */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-gray-600 text-sm mb-3">Popular Categories</h3>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center mt-2 text-xs">
            {categoryData.map((item, index) => (
              <span key={index} className="mr-4 flex items-center">
                <span className="w-3 h-3 rounded-full inline-block mr-1" style={{ backgroundColor: item.color }}></span>
                {item.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    
    </div>
  );
};

export default SecondDashboard;
