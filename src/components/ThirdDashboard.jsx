import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const customers = [
  { date: "01 Jun 2020", name: "Maggie Potts", status: "Completed", total: "$104.98", avatar: "🧑‍🦱" },
  { date: "02 Jun 2020", name: "Kevin Adkins", status: "Completed", total: "$233.00", avatar: "🧑‍🦰" },
  { date: "05 Jun 2020", name: "Max Lynn", status: "Pending", total: "$150.01", avatar: "🧑‍🎓" },
  { date: "06 Jun 2020", name: "Damiw Yatt", status: "Cancelled", total: "$199.99", avatar: "🧔" },
];

const statusColors = {
  Completed: "text-green-500",
  Pending: "text-yellow-500",
  Cancelled: "text-red-500",
};

const ThirdDashboard = () => {
  return (
    <div className="p-4 bg-gray-100 ">
      
      {/* Grid Layout for Table & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* New Customer Table */}
        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">New Customer</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Customer</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{customer.date}</td>
                  <td className="py-2 px-4 flex items-center space-x-2">
                    <span className="text-xl">{customer.avatar}</span>
                    <span>{customer.name}</span>
                  </td>
                  <td className={`py-2 px-4 ${statusColors[customer.status]}`}>{customer.status}</td>
                  <td className="py-2 px-4">{customer.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="mt-3 bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded float-right">
            See All
          </button>
        </div>

        {/* Map Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">City Orders Statistics</h2>
          <div className="w-full h-60">
            <MapContainer center={[37.8, -96]} zoom={4} className="w-full h-full rounded-lg">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
            </MapContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThirdDashboard;
