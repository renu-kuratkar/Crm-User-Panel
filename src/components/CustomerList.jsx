import React, { useState, useEffect } from "react";

const initialCustomers = [
  { id: 1, name: "Christian Bale", email: "christianBale@blueberry.com", location: "Ohio, USA", phone: "+1 (021) 145-2256" },
  { id: 2, name: "Matt Damon", email: "mattdamon@blueberry.com", location: "Briston", phone: "+25 (100) 1254-662" },
  { id: 3, name: "Caitriona Balfe", email: "caitrionabalfe204@blueberry.com", location: "Nevada, USA", phone: "+251 966 522 456" },
];

const CustomerList = () => {
  const [customers, setCustomers] = useState(() => {
    const storedCustomers = localStorage.getItem("customers");
    return storedCustomers ? JSON.parse(storedCustomers) : initialCustomers;
  });

  const [showPopup, setShowPopup] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
  });

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
    setCustomerData(customer);
    setShowPopup(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      const updatedCustomers = customers.filter((customer) => customer.id !== id);
      setCustomers(updatedCustomers);
      localStorage.setItem("customers", JSON.stringify(updatedCustomers));
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setEditingCustomer(null);
    setCustomerData({ name: "", email: "", location: "", phone: "" });
  };

  const handleInputChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!customerData.name || !customerData.email || !customerData.location || !customerData.phone) {
      alert("All fields are required");
      return;
    }

    if (editingCustomer) {
      const updatedCustomers = customers.map((customer) =>
        customer.id === editingCustomer.id ? { ...customer, ...customerData } : customer
      );
      setCustomers(updatedCustomers);
    } else {
      const newCustomer = { id: Date.now(), ...customerData };
      setCustomers([...customers, newCustomer]);
    }

    closePopup();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Customer List</h1>
        <button onClick={() => setShowPopup(true)} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Customer
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Location</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map((customer) => (
              <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4">{customer.name}</td>
                <td className="p-4">{customer.email}</td>
                <td className="p-4">{customer.location}</td>
                <td className="p-4">{customer.phone}</td>
                <td className="p-4">
                  <button className="text-black mr-2 px-2 py-1 rounded bg-green-300" onClick={() => handleEdit(customer)}>Update</button>
                  <button className="text-black px-2 py-1 rounded bg-red-300" onClick={() => handleDelete(customer.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500">No results found</td>
            </tr>
          )}
        </tbody>
      </table>

      {showPopup && (
        <>
          {/* Background Overlay with Blur Effect */}
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
            {/* Popup Modal */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative z-50">
              <h2 className="text-xl font-bold mb-4">{editingCustomer ? "Edit Customer" : "Add Customer"}</h2>
              <button className="absolute top-4 right-4 text-gray-600" onClick={closePopup}>✖</button>

              <input 
                type="text" name="name" placeholder="Name" 
                className="border p-2 w-full mb-2" 
                value={customerData.name} onChange={handleInputChange} required 
              />
              <input 
                type="email" name="email" placeholder="Email" 
                className="border p-2 w-full mb-2" 
                value={customerData.email} onChange={handleInputChange} required 
              />
              <input 
                type="text" name="location" placeholder="Location" 
                className="border p-2 w-full mb-2" 
                value={customerData.location} onChange={handleInputChange} required 
              />
              <input 
                type="text" name="phone" placeholder="Phone" 
                className="border p-2 w-full mb-2" 
                value={customerData.phone} onChange={handleInputChange} required 
              />

              <div className="flex justify-end space-x-4">
                <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={closePopup}>Close</button>
                <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
                  {editingCustomer ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerList;
