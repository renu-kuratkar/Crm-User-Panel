import React from "react";

const projects = [
  {
    name: "Pet App...",
    client: "AdiaSquare",
    email: "darrells@example.com",
    endDate: "15 Nov, 2024",
    daysLeft: "8 Days Left",
    assignedTo: "Team...",
    members: "12 Members",
    status: "Active",
    progress: 75,
  },
  {
    name: "Chain...",
    client: "Eleanor Pena",
    email: "pena12@example.com",
    endDate: "20 Nov, 2024",
    daysLeft: "13 Days Left",
    assignedTo: "Team...",
    members: "10 Members",
    status: "On Hold",
    progress: 50,
  },
  {
    name: "Business Web...",
    client: "Robert Fox",
    email: "foxxxx8s@example.com",
    endDate: "22 Nov, 2024",
    daysLeft: "15 Days Left",
    assignedTo: "Team Liza",
    members: "7 Members",
    status: "Pending",
    progress: 25,
  },
  {
    name: "NFT App...",
    client: "Arlene McCoy",
    email: "arlene78@example.com",
    endDate: "08 Nov, 2024",
    daysLeft: "21 Days Left",
    assignedTo: "Team...",
    members: "9 Members",
    status: "Active",
    progress: 86,
  },
  {
    name: "Digital Avatar...",
    client: "Courtney Henry",
    email: "henry45@example.com",
    endDate: "2 Nov, 2024",
    daysLeft: "25 Days Left",
    assignedTo: "Team...",
    members: "12 Members",
    status: "Active",
    progress: 74,
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "text-green-500";
    case "On Hold":
      return "text-yellow-500";
    case "Pending":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

const ProjectTable = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">All Project Table</h2>

      {/* Scrollable Table on Small Screens */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden overflow-x-auto">
        <table className="w-full text-left hidden md:table">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4">Project Name</th>
              <th className="p-4">Client Name</th>
              <th className="p-4">End Date</th>
              <th className="p-4">Assigned to</th>
              <th className="p-4">Status</th>
              <th className="p-4">Progress</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4 flex items-center gap-2">
                  <div className="relative w-10 h-10">
                    <svg className="absolute top-0 left-0 w-full h-full">
                      <circle
                        cx="20"
                        cy="20"
                        r="18"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="4"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="18"
                        fill="none"
                        stroke="#047857"
                        strokeWidth="4"
                        strokeDasharray="113"
                        strokeDashoffset={113 - (113 * project.progress) / 100}
                        strokeLinecap="round"
                      />
                      <text
                        x="50%"
                        y="50%"
                        dy=".3em"
                        textAnchor="middle"
                        className="text-sm font-semibold"
                      >
                        {project.progress}%
                      </text>
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800">{project.name}</span>
                </td>
                <td className="p-4">
                  <span className="font-semibold">{project.client}</span>
                  <br />
                  <span className="text-gray-500 text-sm">{project.email}</span>
                </td>
                <td className="p-4">
                  <span className="font-semibold">{project.endDate}</span>
                  <br />
                  <span className="text-gray-500 text-sm">{project.daysLeft}</span>
                </td>
                <td className="p-4">
                  <span className="font-semibold">{project.assignedTo}</span>
                  <br />
                  <span className="text-gray-500 text-sm">{project.members}</span>
                </td>
                <td className={`p-4 font-semibold ${getStatusColor(project.status)}`}>
                  • {project.status}
                </td>
                <td className="p-4">
                  <span className="text-gray-600 font-semibold">{project.progress}%</span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-gray-600 hover:text-gray-800 text-xl">•••</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile View - Card Layout */}
        <div className="md:hidden space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-800">{project.name}</h3>
                <span className={`text-sm font-semibold ${getStatusColor(project.status)}`}>
                  • {project.status}
                </span>
              </div>
              <p className="text-sm text-gray-500">{project.client} - {project.email}</p>
              <p className="text-sm text-gray-500">
                <strong>End Date:</strong> {project.endDate} ({project.daysLeft})
              </p>
              <p className="text-sm text-gray-500">
                <strong>Assigned to:</strong> {project.assignedTo} ({project.members})
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="relative w-10 h-10">
                  <svg className="absolute top-0 left-0 w-full h-full">
                    <circle cx="20" cy="20" r="18" fill="none" stroke="#E5E7EB" strokeWidth="4" />
                    <circle
                      cx="20"
                      cy="20"
                      r="18"
                      fill="none"
                      stroke="#047857"
                      strokeWidth="4"
                      strokeDasharray="113"
                      strokeDashoffset={113 - (113 * project.progress) / 100}
                      strokeLinecap="round"
                    />
                    <text
                      x="50%"
                      y="50%"
                      dy=".3em"
                      textAnchor="middle"
                      className="text-sm font-semibold"
                    >
                      {project.progress}%
                    </text>
                  </svg>
                </div>
                <button className="text-gray-600 hover:text-gray-800 text-xl">•••</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
