import React from "react";

const leads = [
  { id: 1, name: "Risa Pearson", email: "richard.john@mail.com", image: "https://randomuser.me/api/portraits/women/1.jpg", status: "Cold lead", statusColor: "bg-yellow-100 text-yellow-600" },
  { id: 2, name: "Margaret D. Evans", email: "margaret.evans@rhyta.com", image: "https://randomuser.me/api/portraits/women/2.jpg", status: "Lost lead", statusColor: "bg-red-100 text-red-600" },
  { id: 3, name: "Bryan J. Luellen", email: "bryuellen@dayrep.com", image: "https://randomuser.me/api/portraits/men/3.jpg", status: "Won lead", statusColor: "bg-green-100 text-green-600" },
  { id: 4, name: "Kathryn S. Collier", email: "collier@jourrapide.com", image: "https://randomuser.me/api/portraits/women/4.jpg", status: "Cold lead", statusColor: "bg-yellow-100 text-yellow-600" },
  { id: 1, name: "Risa Pearson", email: "richard.john@mail.com", image: "https://randomuser.me/api/portraits/women/1.jpg", status: "Cold lead", statusColor: "bg-yellow-100 text-yellow-600" },
  { id: 2, name: "Margaret D. Evans", email: "margaret.evans@rhyta.com", image: "https://randomuser.me/api/portraits/women/2.jpg", status: "Lost lead", statusColor: "bg-red-100 text-red-600" },
  { id: 3, name: "Bryan J. Luellen", email: "bryuellen@dayrep.com", image: "https://randomuser.me/api/portraits/men/3.jpg", status: "Won lead", statusColor: "bg-green-100 text-green-600" },
  { id: 4, name: "Kathryn S. Collier", email: "collier@jourrapide.com", image: "https://randomuser.me/api/portraits/women/4.jpg", status: "Cold lead", statusColor: "bg-yellow-100 text-yellow-600" },
];

const LeadsList = () => {
  return (
    <div className="container mx-auto p-4">
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
  );
};

export default LeadsList;
