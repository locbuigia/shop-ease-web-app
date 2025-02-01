import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUserName,
  updateUserEmail,
  setUserLoginStatus,
  addNewRegisterUser,
} from "../features/userSlice";
import { setShowLoginModal } from "../features/appSlice";
import { toast } from "react-toastify";

const LoginModal = () => {
  const registeredUsers = useSelector((state) => state.user.registeredUsers);
  const showLoginModal = useSelector((state) => state.app.showLoginModal);

  const [isRegisterView, setIsRegisterView] = useState(false);
  const [userNameInput, setUserNameInput] = useState("");
  const [userEmailInput, setUserEmailInput] = useState("");
  const [userPasswordInput, setUserPasswordInput] = useState("");

  const dispatch = useDispatch();

  const clearInput = () => {
    setUserNameInput("");
    setUserEmailInput("");
    setUserPasswordInput("");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    const isUserFound = registeredUsers.find(
      (user) => user.userEmail === userEmailInput
    );

    if (isUserFound) {
      toast.error("This Email has been used already!");
      return;
    }

    const newUser = {
      userName: userNameInput,
      userEmail: userEmailInput,
      userPassword: userPasswordInput,
    };

    dispatch(addNewRegisterUser(newUser));

    dispatch(updateUserName(userNameInput));
    dispatch(updateUserEmail(userEmailInput));
    dispatch(setUserLoginStatus(true));
    dispatch(setShowLoginModal(false));
    clearInput();
    toast.success(`Welcome to ShopEase, ${userNameInput}!`);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const foundUser = registeredUsers.find(
      (user) =>
        user.userEmail === userEmailInput &&
        user.userPassword === userPasswordInput
    );

    if (foundUser) {
      dispatch(updateUserName(foundUser.userName));
      dispatch(updateUserEmail(foundUser.userEmail));
      dispatch(setUserLoginStatus(true));
      dispatch(setShowLoginModal(false));
      clearInput();
      toast.success(`Welcome back, ${foundUser.userName}!`);
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div>
      <div
        className={`inset-0 hidden sm:block w-full h-full fixed duration-500 ${
          showLoginModal ? "z-40 bg-opacity-30 bg-white" : "-z-50"
        }`}
      ></div>
      <div
        className={`fixed inset-0 flex justify-end z-50 transition-transform duration-500 ${
          showLoginModal ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full sm:w-[28rem] bg-black p-8 shadow-2xl relative">
          <button
            onClick={() => {
              dispatch(setShowLoginModal(false));
              setIsRegisterView(false);
            }}
            className="absolute top-4 right-4 hover:focus:outline-none text-white hover:text-gray-600 duration-300"
          >
            <MdClose size={30} />
          </button>
          {isRegisterView ? (
            <>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Create an Account
              </h3>
              <form onSubmit={handleRegisterSubmit}>
                <div className="mb-4">
                  <label className="block mb-2 text-white" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                    value={userNameInput}
                    onChange={(e) => setUserNameInput(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-white" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    value={userEmailInput}
                    onChange={(e) => setUserEmailInput(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-white" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Create a password"
                    value={userPasswordInput}
                    onChange={(e) => setUserPasswordInput(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Register
                </button>
              </form>
              <p className="text-sm mt-4 text-center text-white">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setIsRegisterView(false);
                    clearInput();
                  }}
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  Login here
                </button>
              </p>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Welcome Back!
              </h3>
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                  <label className="block mb-2 text-white" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    value={userEmailInput}
                    onChange={(e) => setUserEmailInput(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-white" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                    value={userPasswordInput}
                    onChange={(e) => setUserPasswordInput(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Login
                </button>
              </form>
              <p className="text-sm mt-4 text-center text-white">
                Don't have an account?{" "}
                <button
                  onClick={() => {
                    setIsRegisterView(true);
                    clearInput();
                  }}
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  Register here
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
