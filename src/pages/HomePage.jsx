import React from "react";
import Hero from "../components/Hero";
import Favorites from "../components/Favorites";
import AboutUs from "../components/AboutUs";
import ProductType from "../components/ProductType";
import ProductCarousel from "../components/ProductCarousel";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <ProductType />
      <Favorites />
      <AboutUs />
      <div className="px-12">
        <ProductCarousel showDivider={false} title="Explore our products" />
      </div>
    </div>
  );
};

const styles = {};

export default HomePage;
