import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const LoginModal = ({ toggleLoginModal }) => {
  const [isRegisterView, setIsRegisterView] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-96 shadow-2xl relative">
        <button
          onClick={toggleLoginModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <MdClose size={30} />
        </button>
        {isRegisterView ? (
          <>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Create an Account
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Create a password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Register
              </button>
            </form>
            <p className="text-gray-600 text-sm mt-4 text-center">
              Already have an account?{" "}
              <button
                onClick={() => setIsRegisterView(false)}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Login here
              </button>
            </p>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Welcome Back!
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-end items-center mb-4">
                <a href="#" className="text-blue-500 hover:underline text-sm">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </form>
            <p className="text-gray-600 text-sm mt-4 text-center">
              Don't have an account?{" "}
              <button
                onClick={() => setIsRegisterView(true)}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Register here
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
