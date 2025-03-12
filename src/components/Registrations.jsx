import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Import Lucide icons

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    companyName: "",
    jobTitle: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") setShowPassword(!showPassword);
    else if (field === "confirmPassword") setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-bold mb-4">Customer Registration Form</h2>
      <p className="text-gray-600 mb-4">Sign up to create an account.</p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name & Username */}
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="w-full p-2 border rounded" required />
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" className="w-full p-2 border rounded" required />

        {/* Email & Phone */}
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full p-2 border rounded" required />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full p-2 border rounded" required />

        {/* Company Name & Job Title Dropdown */}
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border rounded" />
        <select name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Job Title</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
          <option value="Marketer">Marketer</option>
        </select>

        {/* Address */}
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full md:col-span-2 p-2 border rounded" />

        {/* City Dropdown */}
        <select name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>

        {/* State Dropdown */}
        <select name="state" value={formData.state} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select State</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Gujarat">Gujarat</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Rajasthan">Rajasthan</option>
        </select>

        {/* Postal Code */}
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Postal Code" className="w-full p-2 border rounded" />

        {/* Country Dropdown */}
        <select name="country" value={formData.country} onChange={handleChange} className="w-full md:col-span-2 p-2 border rounded">
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>

        {/* Password & Confirm Password with Eye Toggle */}
        <div className="relative w-full">
          <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="w-full p-2 border rounded pr-10" required />
          <button type="button" onClick={() => togglePasswordVisibility("password")} className="absolute inset-y-0 right-3 flex items-center text-gray-500">
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        
        <div className="relative w-full">
          <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="w-full p-2 border rounded pr-10" required />
          <button type="button" onClick={() => togglePasswordVisibility("confirmPassword")} className="absolute inset-y-0 right-3 flex items-center text-gray-500">
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center md:col-span-2">
          <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} className="w-4 h-4" />
          <label className="ml-2 text-gray-700">I agree to the terms and conditions</label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full md:col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Create Account
        </button>
      </form>
    </div>
  );
}
