import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Favorites from "../components/Favorites";
import AboutUs from "../components/AboutUs";
import ProductType from "../components/ProductType";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductType />
      <Favorites />
      <AboutUs />
    </div>
  );
};

const styles = {};

export default HomePage;
