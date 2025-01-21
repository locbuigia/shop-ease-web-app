import React from "react";
import backgroundImg from "../assets/images/shopping-background.jpg";
import { GoChevronDown } from "react-icons/go";

const Hero = () => {
  return (
    <section className="w-full">
      <img className="w-full h-screen" src={backgroundImg} />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 font-sans">
        <div className="text-center leading-loose">
          <h1 className="text-white text-xl md:text-4xl font-semibold">
            Your one-stop shop for everything!
          </h1>
          <h1 className="text-white text-lg md:text-3xl font-thin mt-4">
            Discover the Best Deals Today!
          </h1>
          <a href="#favorites">
            <GoChevronDown
              size={80}
              color="white"
              className="mt-10 w-full hover:scale-125 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
      <h2></h2>
    </section>
  );
};

export default Hero;
