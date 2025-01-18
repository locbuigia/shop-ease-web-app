import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Favorites from "../components/Favorites";
import AboutUs from "../components/AboutUs";
import LoginModal from "../components/LoginModal";

const HomePage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);

  return (
    <div>
      <Navbar
        isLoginModalOpen={isLoginModalOpen}
        toggleLoginModal={toggleLoginModal}
      />
      <Hero />
      <Favorites />
      <AboutUs />
      {isLoginModalOpen && <LoginModal toggleLoginModal={toggleLoginModal} />}
    </div>
  );
};

const styles = {};

export default HomePage;
