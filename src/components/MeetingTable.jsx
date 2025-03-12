import React from "react";

const meetings = [
  { title: "Annual General Meeting", date: "June 30, 2024", time: "10:00 AM", location: "Main Hall" },
  { title: "Budget Review", date: "June 24, 2024", time: "3:00 PM", location: "Finance Department" },
  { title: "Client Presentation", date: "June 10, 2024", time: "11:00 AM", location: "Client's Office" },
  { title: "Client Presentation", date: "June 23, 2024", time: "1:00 PM", location: "Client's Office" },
  { title: "HR Policy Update", date: "June 27, 2024", time: "2:00 PM", location: "HR Department" },
  { title: "IT Security Briefing", date: "June 28, 2024", time: "11:00 AM", location: "IT Office" },
  { title: "Marketing Strategy", date: "June 25, 2024", time: "4:00 PM", location: "Marketing Office" },
];

const MeetingTable = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3 font-semibold">Meeting Title</th>
              <th className="p-3 font-semibold">Meeting Date</th>
              <th className="p-3 font-semibold">Meeting Time</th>
              <th className="p-3 font-semibold">Meeting Location</th>
              <th className="p-3 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((meeting, index) => (
              <tr key={index} className="border-t border-gray-200 text-gray-700">
                <td className="p-3 font-medium">{meeting.title}</td>
                <td className="p-3">{meeting.date}</td>
                <td className="p-3">{meeting.time}</td>
                <td className="p-3">{meeting.location}</td>
                <td className="p-3 flex justify-center gap-2">
                  <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                    ✏️
                  </button>
                  <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetingTable;
