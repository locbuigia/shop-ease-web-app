import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  setUserLoginStatus,
  updateUserEmail,
  updateUserName,
} from "../features/userSlice";
import {
  setShowCartModal,
  setShowLoginModal,
  setShowSideMenu,
} from "../features/appSlice";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const dispatch = useDispatch();

  const showLoginModal = useSelector((state) => state.app.showLoginModal);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userName = useSelector((state) => state.user.userName);
  const itemsInUserCart = useSelector((state) => state.user.itemsInUserCart);

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

  const handleSignOut = () => {
    dispatch(updateUserName(""));
    dispatch(updateUserEmail(""));
    dispatch(setUserLoginStatus(false));
    toast.success("You have signed out successfully!");
  };

  const handleMenuClick = () => {
    dispatch(setShowSideMenu(true));
  };

  return (
    <header
      className={`bg-zinc-800 bg-opacity-70 py-2 px-0 sm:px-2 md:px-4 fixed w-full top-0 z-10`}
    >
      <div className="flex justify-between items-center w-full px-5">
        <NavLink
          to="/"
          className="flex my-1 text-white font-serif text-3xl sm:text-5xl"
        >
          <h1 className="text-gray-300">Shop</h1>
          <h1 className="font-bold">Ease</h1>
        </NavLink>
        <nav className="font-thin justify-center items-center hidden sm:flex">
          <NavLink
            className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 mr-4"
            to="/products"
          >
            Products
          </NavLink>
          {!isUserLoggedIn ? (
            <NavLink
              className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 mr-8"
              onClick={() => dispatch(setShowLoginModal(!showLoginModal))}
            >
              <div className="flex justify-center items-center">
                <FaRegUser size={14} className="mr-1" />
                Login
              </div>
            </NavLink>
          ) : (
            <NavLink
              disabled={!showNavBar}
              className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 mr-8"
              onClick={handleSignOut}
            >
              <div className="flex justify-center items-center ">
                <FaRegUser size={14} className="mr-1" />
                {userName}
              </div>
            </NavLink>
          )}
          <NavLink onClick={() => dispatch(setShowCartModal(true))}>
            <div className="hidden sm:flex text-white font-thin hover:scale-125 duration-300">
              <LiaShoppingBagSolid size={20} className="mr-1" />
              {itemsInUserCart.length}
            </div>
          </NavLink>
        </nav>

        <button onClick={handleMenuClick} className="sm:hidden text-white">
          <IoMenuSharp size={26} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
