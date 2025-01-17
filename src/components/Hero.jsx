import React from "react";
import backgroundImg from "../assets/images/shopping-background.jpg";
import { GoChevronDown } from "react-icons/go";

const Hero = () => {
  return (
    <section className="w-full h-full">
      <img
        className="w-full h-screen invisible sm:visible"
        src={backgroundImg}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 min-w-60 font-sans">
        <div className="text-center leading-loose">
          <h1 className="text-white text-2xl md:text-5xl font-semibold">
            Your one-stop shop for everything!
          </h1>
          <h4 className="text-white text-2xl md:text-5xl font-thin">
            Discover the Best Deals Today!
          </h4>
          <GoChevronDown size={80} color="white" className="mt-10 w-full" />
        </div>
      </div>
      <h2></h2>
    </section>
  );
};

export default Hero;
