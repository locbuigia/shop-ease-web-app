import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowSideMenu } from "../features/appSlice";
import { MdClose } from "react-icons/md";

import { store } from "../store";
import { FaGithub, FaLinkedin, FaRegUser } from "react-icons/fa";
import Divider from "./Divider";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showSideMenu = useSelector((state) => state.app.showSideMenu);

  const handleButtonClick = () => {
    dispatch(setShowSideMenu(false));
    navigate("/products");
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
              className="w-full flex flex-col items-start mt-14 mb-6"
              onClick={handleButtonClick}
            >
              <h1 className="text-3xl mb-2">View Products</h1>
              <Divider />
            </button>
            <button className="w-full flex flex-col items-start mt-14 mb-6">
              <div className="flex items-center mb-2">
                <FaRegUser size={24} className="mr-2" />
                <h1 className="text-3xl">Login</h1>
              </div>
              <Divider />
            </button>
            <button className="w-full flex flex-col items-start mt-14 mb-6">
              <div className="flex items-center mb-2">
                <LiaShoppingBagSolid size={24} className="mr-2" />
                <h1 className="text-3xl">View Cart</h1>
              </div>
              <Divider />
            </button>
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
