import React from "react";
import backgroundImg from "../assets/images/about-us-background.jpg";

const AboutUs = () => {
  return (
    <div className="relative w-full h-3/5">
      <img className="w-full h-[40rem]" src={backgroundImg} />
      <div className="absolute bottom-0 h-full flex w-full md:w-1/2 items-center justify-center bg-black bg-opacity-70 min-w-60 font-sans">
        <div className="text-center leading-loose px-8">
          <h1 className="text-zinc-300 text-xl md:text-2xl mb-8 font-semibold tracking-widest">
            ABOUT US
          </h1>
          <h1 className="text-zinc-300 text-sm md:text-lg font-thin  tracking-widest">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h1>
        </div>
      </div>
      <h2></h2>
    </div>
  );
};

export default AboutUs;
