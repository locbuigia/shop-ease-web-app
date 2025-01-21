import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  setUserLoginStatus,
  updateUserEmail,
  updateUserName,
} from "../features/userSlice";
import { setShowLoginModal } from "../features/appSlice";
import { FaRegUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const showLoginModal = useSelector((state) => state.app.showLoginModal);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userName = useSelector((state) => state.user.userName);

  const dispatch = useDispatch();

  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-gray-600 text-white rounded-md px-3 py-2 mr-4 font-thin"
      : "text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 mr-4 font-thin";

  const handleSignOut = () => {
    dispatch(updateUserName(""));
    dispatch(updateUserEmail(""));
    dispatch(setUserLoginStatus(false));
    toast.success("You have signed out successfully!");
  };

  return (
    <header
      className={`font-serif bg-gray-800 bg-opacity-50 py-2 px-4 fixed w-full top-0 z-10 transition-transform duration-300 ${
        showNavBar && !showLoginModal ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <NavLink to="/" className="flex mx-5 my-1 text-white">
          <h1 className="text-4xl font-thin">Shop</h1>
          <h1 className="text-4xl font-bold">Ease</h1>
        </NavLink>
        <nav className="font-thin flex">
          <NavLink className={linkClass} to="/products">
            Products
          </NavLink>
          {!isUserLoggedIn ? (
            <NavLink
              className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 mr-4"
              onClick={() => dispatch(setShowLoginModal(!showLoginModal))}
            >
              <div className="flex justify-center items-center  font-thin">
                <FaRegUser size={12} className="mr-1" />
                Login
              </div>
            </NavLink>
          ) : (
            <NavLink
              disabled={!showNavBar}
              className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 mr-4"
              onClick={handleSignOut}
            >
              <div className="flex justify-center items-center  font-thin">
                <FaRegUser size={12} className="mr-1" />
                {userName}
              </div>
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
