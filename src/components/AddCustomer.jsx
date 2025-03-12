import React from "react";

const AddCustomer = ({ closePopup }) => {
  return (
    <div>
      <input type="text" placeholder="Name" className="border p-2 w-full mb-2" required />
      <input type="email" placeholder="Email" className="border p-2 w-full mb-2" required />
      <input type="text" placeholder="Location" className="border p-2 w-full mb-2" required />
      <input type="text" placeholder="Phone" className="border p-2 w-full mb-2" required />
      <div className="flex justify-end space-x-4">
        <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={closePopup}>Close</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Add</button>
      </div>
    </div>
  );
};

export default AddCustomer;
