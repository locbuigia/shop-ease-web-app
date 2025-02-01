import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowCartModal,
  setShowLoginModal,
  setShowSearchModal,
  setShowSideMenu,
} from "../features/appSlice";
import { MdClose } from "react-icons/md";

import { FaGithub, FaLinkedin, FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import {
  SIDE_MENU_CART,
  SIDE_MENU_LOGIN,
  SIDE_MENU_PRODUCTS,
  SIDE_MENU_SEARCH,
  SIDE_MENU_SIGNOUT,
} from "../constants";
import Divider from "./Divider";
import { IoIosLogOut } from "react-icons/io";
import { toast } from "react-toastify";
import {
  setUserLoginStatus,
  updateUserEmail,
  updateUserName,
} from "../features/userSlice";

const SideMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showSideMenu = useSelector((state) => state.app.showSideMenu);
  const itemsInUserCart = useSelector((state) => state.user.itemsInUserCart);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const totalQty =
    itemsInUserCart.length > 0
      ? itemsInUserCart.reduce(
          (totalQty, item) => (totalQty += item.quantity),
          0
        )
      : 0;

  const handleButtonClick = (type) => {
    dispatch(setShowSideMenu(false));

    if (type === SIDE_MENU_PRODUCTS) {
      navigate("/products");
    } else if (type === SIDE_MENU_LOGIN) {
      dispatch(setShowLoginModal(true));
    } else if (type === SIDE_MENU_CART) {
      dispatch(setShowCartModal(true));
    } else if (type === SIDE_MENU_SEARCH) {
      dispatch(setShowSearchModal(true));
    } else if (type === SIDE_MENU_SIGNOUT) {
      dispatch(updateUserName(""));
      dispatch(updateUserEmail(""));
      dispatch(setUserLoginStatus(false));
      toast.success("You have signed out successfully!");
    }
  };

  return (
    <div className="block sm:hidden">
      <div
        className={`fixed w-full h-full bg-zinc-900 inset-0 flex justify-end z-50 text-white transition-transform duration-500 ${
          showSideMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute flex top-4 left-4 text-white font-serif text-3xl">
          <h1 className="text-gray-300">Shop</h1>
          <h1 className="font-bold">Ease</h1>
        </div>
        <button
          onClick={() => dispatch(setShowSideMenu(false))}
          className="absolute top-4 right-4 text-white hover:text-gray-600 focus:outline-none"
        >
          <MdClose size={30} />
        </button>
        <div className="w-full pt-20 pb-10 px-4 flex flex-col items-center justify-between">
          <div className="w-full">
            <button
              className="w-full flex flex-col items-start mt-8 mb-6"
              onClick={() => handleButtonClick(SIDE_MENU_PRODUCTS)}
            >
              <h1 className="text-2xl mb-2">View Products</h1>
              <Divider />
            </button>
            <button
              className="w-full flex flex-col items-start mt-8 mb-6"
              onClick={() => handleButtonClick(SIDE_MENU_SEARCH)}
            >
              <div className="flex items-center mb-2">
                <IoSearch size={24} className="mr-2" />
                <h1 className="text-2xl">Seach Product</h1>
              </div>
              <Divider />
            </button>
            <button
              className="w-full flex flex-col items-start mt-8 mb-6"
              onClick={() => handleButtonClick(SIDE_MENU_CART)}
            >
              <div className="flex items-center mb-2">
                <LiaShoppingBagSolid size={24} className="mr-2" />
                <h1 className="text-2xl">{`View Cart (${totalQty})`}</h1>
              </div>
              <Divider />
            </button>
            {isLoggedIn ? (
              <button
                className="w-full flex flex-col items-start mt-8 mb-6"
                onClick={() => handleButtonClick(SIDE_MENU_SIGNOUT)}
              >
                <div className="flex items-center mb-2">
                  <IoIosLogOut size={24} className="mr-2" />
                  <h1 className="text-2xl">Sign Out</h1>
                </div>
                <Divider />
              </button>
            ) : (
              <button
                className="w-full flex flex-col items-start mt-8 mb-6"
                onClick={() => handleButtonClick(SIDE_MENU_LOGIN)}
              >
                <div className="flex items-center mb-2">
                  <FaRegUser size={24} className="mr-2" />
                  <h1 className="text-2xl">Login</h1>
                </div>
                <Divider />
              </button>
            )}
          </div>
          <div>
            <p className="tracking-wide leading-loose my-2">
              Built by Loc Bui - 2025
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/locbuigia/"
                className="mr-8"
                target="_blank"
              >
                <FaLinkedin size={36} />
              </a>
              <a href="https://github.com/locbuigia" target="_blank">
                <FaGithub size={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
