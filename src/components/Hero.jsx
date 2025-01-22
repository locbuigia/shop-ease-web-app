import React from "react";
import backgroundImg from "../assets/images/shopping-background.jpg";
import { GoChevronDown } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full h-full">
      <img className="w-full h-screen" src={backgroundImg} />
      <div className="absolute inset-0 flex items-center justify-center sm:bg-black sm:bg-opacity-40 ">
        <div className="text-center leading-loose">
          <h1 className="text-white text-xl md:text-4xl font-semibold">
            Your one-stop shop for bags and backpacks!
          </h1>
          <h1 className="text-white text-lg md:text-3xl mt-4 font-thin">
            Discover the Best Deals Today!
          </h1>
          <button
            onClick={() => navigate("/products")}
            className="mt-12 text-xl border-2 border-white p-2 text-white bg-black bg-opacity-20 hover:bg-white hover:text-black duration-300"
          >
            SHOP NOW
          </button>
          <a href="#favorites">
            <GoChevronDown
              size={80}
              color="white"
              className="mt-20 w-full hover:scale-125 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
      <h2></h2>
    </section>
  );
};

export default Hero;
