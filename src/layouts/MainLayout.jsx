import React, { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/ReactToastify.css";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import Navbar from "../components/Navbar";
import CartModal from "../components/CartModal";
import SideMenu from "../components/SideMenu";

const MainLayout = () => {
  const showLoginModal = useSelector((state) => state.app.showLoginModal);
  const showCartModal = useSelector((state) => state.app.showCartModal);

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (showCartModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [showCartModal]);

  return (
    <>
      <Outlet />
      <Navbar />
      <Footer />
      <CartModal />
      <SideMenu />
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
