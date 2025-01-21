import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  setUserLoginStatus,
  updateUserEmail,
  updateUserName,
} from "../features/userSlice";
import {
  setProductSortByType,
  setProductType,
  setShowLoginModal,
} from "../features/appSlice";
import { BAG_TYPE_ALL } from "../constants";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";

import items from "../data/products.json";

const Navbar = () => {
  const navigate = useNavigate();
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
      ? "bg-gray-600 text-white rounded-md px-3 py-2 mr-4"
      : "text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 mr-4";

  const handleSignOut = () => {
    dispatch(updateUserName(""));
    dispatch(updateUserEmail(""));
    dispatch(setUserLoginStatus(false));
    toast.success("You have signed out successfully!");
  };

  return (
    <header
      className={`bg-zinc-800 bg-opacity-70 py-2 px-0 sm:px-2 md:px-4 fixed w-full top-0 z-10 transition-transform duration-300 ${
        showNavBar && !showLoginModal ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <NavLink
          to="/"
          className="flex mx-5 my-1 text-white font-serif text-5xl"
        >
          <h1 className="text-gray-300">Shop</h1>
          <h1 className="font-bold">Ease</h1>
        </NavLink>
        <nav className="font-thin flex  invisible sm:visible">
          <NavLink
            className={linkClass}
            to="/products"
            onClick={() => {
              dispatch(setProductType(BAG_TYPE_ALL));
              dispatch(setProductSortByType(PRODUCT_SORT_TYPE_RECOMMENDED));
              dispatch(setProducts(items));
            }}
          >
            Products
          </NavLink>
          {!isUserLoggedIn ? (
            <NavLink
              className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 mr-4 invisible sm:visible"
              onClick={() => dispatch(setShowLoginModal(!showLoginModal))}
            >
              <div className="flex justify-center items-center ">
                <FaRegUser size={12} className="mr-1" />
                Login
              </div>
            </NavLink>
          ) : (
            <NavLink
              disabled={!showNavBar}
              className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 mr-4 invisible sm:visible"
              onClick={handleSignOut}
            >
              <div className="flex justify-center items-center ">
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
