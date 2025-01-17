import React from "react";
import { Outlet, useMatch } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const MainLayout = () => {
  const isInLoginPage = useMatch("/login");
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
