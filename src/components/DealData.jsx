import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaCalendarAlt, FaCog } from "react-icons/fa";
import DealsStageDashboard from "./DealsStageDashboard";

const dealsData = [
  { name: "Collins", stage: "Conversation", value: "$04,51,000", probability: "85%", status: "Lost" },
  { name: "Snopelski", stage: "Pipeline", value: "$14,51,000", probability: "56%", status: "Won" },
  { name: "Ams", stage: "Won", value: "$12,51,000", probability: "15%", status: "Won" },
  { name: "Mumm", stage: "Lost", value: "$51,000", probability: "45%", status: "Lost" },
  { name: "Sozk", stage: "Follow Up", value: "$67,000", probability: "5%", status: "Won" },
];

const chartData = [
  { stage: "Pipeline", deals: 400 },
  { stage: "Follow Up", deals: 130 },
  { stage: "Schedule", deals: 248 },
  { stage: "Conversation", deals: 470 },
  { stage: "Won", deals: 470 },
  { stage: "Lost", deals: 180 },
];

const DealData = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Deals Dashboard</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recently Created Deals */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">🔗 Recently Created Deals</h2>
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-gray-500 text-lg" />
              <select className="border p-2 rounded-md text-sm">
                <option>Last 30 days</option>
                <option>Last 7 days</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-sm">
                  <th className="p-3 text-left">Deal Name</th>
                  <th className="p-3 text-left">Stage</th>
                  <th className="p-3 text-left">Deal Value</th>
                  <th className="p-3 text-left">Probability</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {dealsData.map((deal, index) => (
                  <tr key={index} className="border-b text-sm">
                    <td className="p-3">{deal.name}</td>
                    <td className="p-3">{deal.stage}</td>
                    <td className="p-3">{deal.value}</td>
                    <td className="p-3">{deal.probability}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-md text-white text-xs ${
                          deal.status === "Won" ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {deal.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deals By Stage Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">📊 Deals By Stage</h2>
            <div className="flex space-x-3">
              <select className="border p-2 rounded-md text-sm">
                <option>Sales Pipeline</option>
              </select>
              <select className="border p-2 rounded-md text-sm">
                <option>Last 30 Days</option>
              </select>
            </div>
          </div>

          {/* Chart */}
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="deals" fill="#17a2b8" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Settings Button */}
      <button className="fixed bottom-6 right-6 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition">
        <FaCog className="text-xl" />
      </button>

      {/* Deals Stage Dashboard */}
      <div className="mt-8">
        <DealsStageDashboard />
      </div>
    </div>
  );
};

export default DealData;
