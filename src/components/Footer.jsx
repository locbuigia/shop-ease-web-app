import React from "react";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/loc-logo.jpeg";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 text-white font-thin font-sans w-full text-center py-4">
        <div className="lg:mx-64 md:mx-24 sm:mx-8">
          <div className="flex justify-center">
            <a href="#top">
              <FaArrowUp size={24} />
            </a>
          </div>
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
    </>
  );
};

export default Footer;
