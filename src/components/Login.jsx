import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import adialogo from "../assets/adialogo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate("/dashboard");   
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="align-items max-h-full justify-content-center">
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-100 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex justify-center">
          <div className="bg-black p-3 rounded-lg">
            <img src={adialogo} alt="Logo" className="w-10" />
          </div>
        </div>

        <h2 className="text-center text-2xl font-semibold mt-4">Login</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Please enter your details to login
        </p>

        <form onSubmit={handleLogin}>
          <label className="block text-gray-600 text-xs mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-200 mb-2 text-sm"
            required
          />

          <label className="block text-gray-600 text-xs mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-200 text-sm pr-10"
              required
            />
            <button
              type="button"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md text-xs hover:opacity-90 mt-4 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
