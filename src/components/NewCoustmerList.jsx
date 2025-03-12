import { useState } from "react";

const customersData = [
  { name: "Christian Bale", email: "christian.Bale@blueberry.com", location: "Ohio, USA", phone: "+1 (021) 145-2256" },
  { name: "Matt Damon", email: "mattdamon@blueberry.com", location: "Briston", phone: "+25 (100) 1254-862" },
  { name: "Caitriona Balfe", email: "caitrionabalfe204@blueberry.com", location: "Nevada, USA", phone: "+251 968 522 456" },
  { name: "Josh Lucas", email: "joshlucas007@blueberry.com", location: "Georgia", phone: "+5 20154-65755" },
  { name: "Jon Bernthal", email: "jon.Bernthal@blueberry.com", location: "West Virginia, USA", phone: "+200 51145 85523" },
  { name: "Noah Jupe", email: "noahjupe@blueberry.com", location: "Ohio, USA", phone: "+251 5225-98554" },
  { name: "Tracy Letts", email: "tracyetts@blueberry.com", location: "Texas, USA", phone: "+22 562 4587 55" },
  { name: "Ray McKinnon", email: "raymc.Kinnon@blueberry.com", location: "Nevada, USA", phone: "+86 4515858632" },
  { name: "Remo Girone", email: "remo.girone420@blueberry.com", location: "Bristow", phone: "+6 14552-15771" },
  { name: "Jack McMullen", email: "jackmullen@blueberry.com", location: "California", phone: "+25 4415-21445" }
];

export default function CustomerList() {
  const [search, setSearch] = useState("");
  const [customers, setCustomers] = useState(customersData);

  // View function
  const handleView = (customer) => {
    alert(`Name: ${customer.name}\nEmail: ${customer.email}\nLocation: ${customer.location}\nPhone: ${customer.phone}`);
  };

  // Edit function
  const handleEdit = (index) => {
    const newName = prompt("Enter new name:", customers[index].name);
    if (newName) {
      const updatedCustomers = [...customers];
      updatedCustomers[index].name = newName;
      setCustomers(updatedCustomers);
    }
  };

  // Delete function
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers(customers.filter((_, i) => i !== index));
    }
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Customer List</h2>
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 text-left">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr key={index} className="border-b border-gray-300/50 hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.location}</td>
                <td className="p-3">{customer.phone}</td>
                <td className="p-3 text-center space-x-2">
                  {/* 👁️ View Button */}
                  <button onClick={() => handleView(customer)} className="text-gray-500 hover:text-blue-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </button>

                  {/* ✏️ Edit Button */}
                  <button onClick={() => handleEdit(index)} className="text-gray-500 hover:text-yellow-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"></path>
                    </svg>
                  </button>

                  {/* 🗑️ Delete Button */}
                  <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M5 6h14l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6z"></path>
                    </svg>
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
