import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isAtTop }) => {
  return (
    <header
      style={{
        backgroundColor: isAtTop ? "transparent" : "black",
        padding: isAtTop ? "15px" : "8px",
        transition:
          "background-color 0.5s ease-in-out, padding 0.5s ease-in-out",
      }}
      className="fixed w-full p-3 z-50"
    >
      <div></div>
      <div className="flex justify-between items-center w-full">
        <div className="flex mx-5 my-1">
          <h1 className="text-white text-4xl font-thin">Shop</h1>
          <h1 className="text-white text-4xl font-bold">Ease</h1>
        </div>
        <nav className="text-white font-thin">
          <NavLink
            className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 mr-4"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 mr-4"
            to="/login"
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
