import React from "react";
import { Outlet, useMatch } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import Footer from "../components/Footer";

const MainLayout = () => {
  const isInLoginPage = useMatch("/login");
  return (
    <>
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
