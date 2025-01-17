import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar isAtTop={isAtTop} />
      <Hero />
      <section className="products">
        <div className="product">
          <h3>Product 1</h3>
          <p>$19.99</p>
        </div>
        <div className="product">
          <h3>Product 2</h3>
          <p>$29.99</p>
        </div>
      </section>
    </div>
  );
};

const styles = {};

export default HomePage;
