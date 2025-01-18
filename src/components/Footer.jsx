import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 text-white font-thin font-sans w-full text-center py-2">
        <div className="lg:mx-64 md:mx-24 sm:mx-8">
          <div className="flex justify-center mt-2">
            <a href="#top">
              <FaArrowUp size={24} />
            </a>
          </div>
          <p className="tracking-wide leading-loose my-2">
            Built by Loc Bui - 2025
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
