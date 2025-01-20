import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/ReactToastify.css";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";

const MainLayout = () => {
  const showLoginModal = useSelector((state) => state.app.showLoginModal);
  return (
    <>
      <Outlet />
      {showLoginModal && <LoginModal />}
      <Footer />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
