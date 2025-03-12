import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditCustomer = () => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    name: "Christian Bale",
    email: "christian.Bale@blueberry.com",
    phone: "+1 (021) 145-2256",
    birthday: "2021-05-15",
    company: "AB Nexa",
    country: "",
    state: "",
    address: "Lane & High, 2124 North High Street, Columbus",
    zipcode: "43201",
    bio: "Brolin uploaded a picture of Christian Bale next to his own father James Brolin...",
    gender: "male",
    notifications: { email: false, sms: true, phone: false },
    image: "" // For image upload
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setCustomer({
        ...customer,
        notifications: { ...customer.notifications, [name]: checked },
      });
    } else {
      setCustomer({ ...customer, [name]: value });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCustomer({ ...customer, image: URL.createObjectURL(file) });
    }
  };

  const handleSave = () => {
    alert("Customer saved successfully!");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      alert("Customer deleted successfully!");
      navigate("/customers");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <button onClick={() => navigate("//dashboard")} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">⬅ Back</button>
      <h1 className="text-2xl font-semibold mb-4">Edit Customer</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 flex flex-col items-center">
          <div className="w-48 h-48 border rounded-lg flex items-center justify-center bg-gray-100">
            {customer.image ? <img src={customer.image} alt="Profile" className="w-full h-full object-cover" /> : "Upload Image"}
          </div>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2" />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <input type="text" name="name" value={customer.name} onChange={handleChange} placeholder="Full Name" className="border p-2 rounded" />
          <input type="text" name="company" value={customer.company} onChange={handleChange} placeholder="Company Name" className="border p-2 rounded" />
          <input type="date" name="birthday" value={customer.birthday} onChange={handleChange} className="border p-2 rounded" />
          <input type="text" name="phone" value={customer.phone} onChange={handleChange} placeholder="Phone" className="border p-2 rounded" />
          <input type="email" name="email" value={customer.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
          <input type="text" name="zipcode" value={customer.zipcode} onChange={handleChange} placeholder="Zipcode" className="border p-2 rounded" />
          <select name="country" value={customer.country} onChange={handleChange} className="border p-2 rounded">
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
          <select name="state" value={customer.state} onChange={handleChange} className="border p-2 rounded">
            <option value="">Select State</option>
          </select>
          <input type="text" name="address" value={customer.address} onChange={handleChange} placeholder="Address" className="col-span-2 border p-2 rounded" />
          <textarea name="bio" value={customer.bio} onChange={handleChange} placeholder="Bio" className="col-span-2 border p-2 rounded"></textarea>
          <div className="col-span-2 flex gap-4">
            <label><input type="radio" name="gender" value="male" checked={customer.gender === "male"} onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="female" checked={customer.gender === "female"} onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="other" checked={customer.gender === "other"} onChange={handleChange} /> Other</label>
          </div>
          <div className="col-span-2">
            <label className="mr-2">Notification Type:</label>
            <label><input type="checkbox" name="email" checked={customer.notifications.email} onChange={handleChange} /> Email</label>
            <label className="ml-2"><input type="checkbox" name="sms" checked={customer.notifications.sms} onChange={handleChange} /> SMS</label>
            <label className="ml-2"><input type="checkbox" name="phone" checked={customer.notifications.phone} onChange={handleChange} /> Phone</label>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete Customer</button>
        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save Customer</button>
      </div>
    </div>
  );
};

export default EditCustomer;
