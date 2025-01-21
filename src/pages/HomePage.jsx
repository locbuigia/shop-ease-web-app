import React from "react";
import Hero from "../components/Hero";
import Favorites from "../components/Favorites";
import AboutUs from "../components/AboutUs";
import ProductType from "../components/ProductType";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <ProductType />
      <Favorites />
      <AboutUs />
    </div>
  );
};

const styles = {};

export default HomePage;
