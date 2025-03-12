import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import SecondDashboard from "./SecondDashboards";
import ThirdDashboard from "./ThirdDashboard";

const data = [
  { name: "01:00", income: 80, expense: 60 },
  { name: "02:00", income: 75, expense: 65 },
  { name: "03:00", income: 70, expense: 68 },
  { name: "04:00", income: 120, expense: 75 },
  { name: "05:00", income: 90, expense: 80 },
];

const NewDashboard = () => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-3 shadow rounded-lg">
          <h3 className="text-gray-600 text-sm">Total Profit</h3>
          <p className="text-lg font-semibold">$95,595 <span className="text-green-500 text-sm">+3.65%</span></p>
        </div>
        <div className="bg-white p-3 shadow rounded-lg">
          <h3 className="text-gray-600 text-sm">Total Expenses</h3>
          <p className="text-lg font-semibold">$12,789 <span className="text-green-500 text-sm">+2.67%</span></p>
        </div>
        <div className="bg-white p-3 shadow rounded-lg">
          <h3 className="text-gray-600 text-sm">New Users</h3>
          <p className="text-lg font-semibold">13,984 <span className="text-red-500 text-sm">-8.98%</span></p>
        </div>
      </div>

      {/* Sales Report & Top Selling Products Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Left: Sales Report */}
        <div className="bg-white p-4 shadow rounded-lg flex-1">
          <h3 className="text-gray-600 text-sm mb-3">Sales Report</h3>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0000FF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0000FF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#808080" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#808080" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Area type="monotone" dataKey="income" stroke="#0000FF" fill="url(#colorIncome)" />
              <Area type="monotone" dataKey="expense" stroke="#808080" fill="url(#colorExpense)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Right: Top Selling Products */}
        <div className="bg-white p-4 shadow rounded-lg w-full md:w-1/3">
          <h3 className="text-gray-600 text-sm mb-3">Top Selling Product</h3>
          <ul>
            <li className="flex justify-between border-b py-2 text-sm">
              <span>🎧 Rockerz Bluetooth Headset</span>
              <span className="font-semibold">$1056</span>
            </li>
            <li className="flex justify-between border-b py-2 text-sm">
              <span>📷 Wifi Security Camera</span>
              <span className="font-semibold">$1799</span>
            </li>
            <li className="flex justify-between border-b py-2 text-sm">
              <span>🔊 Stone Bluetooth Speaker</span>
              <span className="font-semibold">$1099</span>
            </li>
            <li className="flex justify-between py-2 text-sm">
              <span>💻 Ryzen 5 Hexa Core 5600H</span>
              <span className="font-semibold">$9999</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Dashboards */}
      <div className="mb-6">
        <SecondDashboard />
      </div>
      <div>
        <ThirdDashboard />
      </div>
    </div>
  );
};

export default NewDashboard;
