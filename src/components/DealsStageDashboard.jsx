import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const leadsData = [
  { stage: "Conversation", count: 400 },
  { stage: "Follow Up", count: 150 },
  { stage: "Inpipeline", count: 420 },
];

const wonDealsData = [
  { stage: "Conversation", count: 380 },
  { stage: "Follow Up", count: 140 },
  { stage: "Inpipeline", count: 300 },
];

const DealsStageDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Leads By Stage */}
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">🔗 Leads By Stage</h2>
            <div className="flex gap-2">
              <select className="border p-2 rounded">
                <option>Marketing Pipeline</option>
              </select>
              <select className="border p-2 rounded">
                <option>Last 3 months</option>
              </select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart layout="vertical" data={leadsData}>
              <XAxis type="number" />
              <YAxis dataKey="stage" type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#f43f5e" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Won Deals Stage */}
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">🏆 Won Deals Stage</h2>
            <div className="flex gap-2">
              <select className="border p-2 rounded">
                <option>Marketing Pipeline</option>
              </select>
              <select className="border p-2 rounded">
                <option>Last 3 months</option>
              </select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart layout="vertical" data={wonDealsData}>
              <XAxis type="number" />
              <YAxis dataKey="stage" type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#22c55e" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DealsStageDashboard;
