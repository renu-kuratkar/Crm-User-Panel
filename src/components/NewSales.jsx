import React from "react";
import {
  FaShoppingCart,
  FaBoxOpen,
  FaStore,
  FaFilm,
  FaUpload,
  FaEye,
  FaBell,
} from "react-icons/fa";

const NewSales = () => {
  const analytics = [
    { icon: <FaShoppingCart />, text: "500,000 New Orders" },
    { icon: <FaBoxOpen />, text: "950,000 Products" },
    { icon: <FaStore />, text: "325,010 Retail Stores" },
    { icon: <FaFilm />, text: "780,500 Movies Downloaded" },
    { icon: <FaUpload />, text: "250,000 Images Uploaded" },
    { icon: <FaEye />, text: "870,000 Monthly Visits" },
    { icon: <FaBell />, text: "350,000 Tickets Booked" },
  ];

  const activities = [
    { date: "Today", text: "Messages accepted with attachments." },
    {
      date: "Yesterday",
      text: "Sent email notifications of subscriptions and deletions to list owner.",
    },
    { date: "10th December", text: "Required change logs activity reports." },
    { date: "15th December", text: "Strategic partnership plan." },
    {
      date: "21st December",
      text: "Sent email notifications of subscriptions and deletions to list owner.",
    },
    { date: "25th December", text: "Required change logs activity reports." },
    { date: "18th December", text: "Strategic partnership plan." },
  ];

  const orders = [
    {
      initials: "AM",
      name: "Aaleyah Malik",
      status: "Ordered",
      details:
        "We are pleased to inform you that ticket no. WAFI510 has been booked.",
    },
    {
      initials: "AS",
      name: "Ali Sayed",
      status: "Delivered",
      details: "The carrier successfully delivered the message to the end user.",
    },
    {
      initials: "ZB",
      name: "Zara Brown",
      status: "Cancelled",
      details: "Your order was cancelled as per your request.",
    },
    {
      initials: "AM",
      name: "Aaleyah Malik",
      status: "Ordered",
      details:
        "We are pleased to inform you that ticket no. WAFI510 has been booked.",
    },
    {
      initials: "AS",
      name: "Ali Sayed",
      status: "Delivered",
      details: "The carrier successfully delivered the message to the end user.",
    },
  ];

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-100 min-h-screen">
      {/* Quick Analytics */}
      <div className="bg-white p-5 rounded-lg shadow h-80 overflow-y-auto scrollbar scrollbar-thumb-gray-900 custom-scroll  scrollbar-track-gray-100">
        <h2 className="text-lg font-semibold mb-3">Quick Analytics</h2>
        {analytics.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 mb-3">
            <div className="bg-green-800 text-white p-3 rounded-lg text-xl">
              {item.icon}
            </div>
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Activity */}
      <div className="bg-white p-5 rounded-lg shadow h-80 overflow-y-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <h2 className="text-lg font-semibold mb-3">Activity</h2>
        <div className="relative pl-5 border-l-2 border-gray-200">
          {activities.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="absolute -left-3 w-6 h-6 bg-white border-2 border-green-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-700 rounded-full"></div>
              </div>
              <h4 className="text-gray-600 font-semibold">{item.date}</h4>
              <p className="text-gray-500 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Order Status */}
      <div className="bg-white p-5 rounded-lg shadow h-80 overflow-y-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <h2 className="text-lg font-semibold mb-3">Order Status</h2>
        {orders.map((order, index) => (
          <div key={index} className="flex items-start space-x-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-green-700 text-white font-semibold rounded-full text-lg">
              {order.initials}
            </div>
            <div>
              <span
                className={`px-2 py-1 text-xs font-semibold text-white rounded ${
                  order.status === "Ordered"
                    ? "bg-green-800"
                    : order.status === "Delivered"
                    ? "bg-green-800"
                    : "bg-red-700"
                }`}
              >
                {order.status}
              </span>
              <h4 className="font-semibold">{order.name}</h4>
              <p className="text-gray-500 text-sm">{order.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewSales;
