import React from "react";
import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/ReactToastify.css";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const showLoginModal = useSelector((state) => state.app.showLoginModal);
  return (
    <>
      <Outlet />
      <Navbar />
      <Footer />
      {showLoginModal && <LoginModal />}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default MainLayout;
