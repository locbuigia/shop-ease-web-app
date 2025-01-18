import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
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

  return (
    <header
      className={`bg-black bg-opacity-70 text-white py-2 px-4 fixed w-full top-0 z-10 transition-transform duration-300 ${
        showNavBar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <NavLink to="/" className="flex mx-5 my-1 font-serif">
          <h1 className="text-white text-4xl font-thin">Shop</h1>
          <h1 className="text-white text-4xl font-bold">Ease</h1>
        </NavLink>
        <nav className="text-white font-thin">
          <NavLink
            disabled={!showNavBar}
            className="text-white hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 mr-4"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            disabled={!showNavBar}
            className="text-white hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 mr-4"
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
