import React from "react";
import adialogo from "../assets/adialogo.png";

const SignIn = ({ onSuccess }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-md">
       
        {/* Logo */}
        <div className="flex justify-center">
          <div className="bg-black p-3 rounded-md">
            <img src={adialogo} alt="Logo" className="w-8" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-lg font-semibold mt-3">Welcome back</h2>
        <p className="text-center text-gray-500 text-xs mb-4">Please enter your details to sign in</p>

        {/* Sign-in Form */}
        <form onSubmit={(e) => { e.preventDefault(); onSuccess(); }}>
          <label className="block text-gray-600 text-xs mb-1">Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded-md text-xs focus:ring focus:ring-purple-200 mb-2"
            required
          />

          <label className="block text-gray-600 text-xs mb-1">Password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded-md text-xs focus:ring focus:ring-purple-200"
              required
            />
            <span className="absolute right-3 top-3 cursor-pointer text-gray-400 text-sm">👁</span>
          </div>

          <div className="flex justify-between items-center my-3">
            <label className="flex items-center text-xs text-gray-600">
              <input type="checkbox" className="mr-1" /> Remember 
            </label>
            <a href="#" className="text-xs text-purple-600 hover:underline">Forgot password?</a>
          </div>

          {/* Sign In Button */}
          <button 
            type="submit" 
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md text-xs hover:opacity-90"
          >
            Sign in
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-xs text-gray-600 mt-3">
          Don't have an account? <a href="#" className="text-purple-600 hover:underline">Create account</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
