// Import necessary libraries
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <MainLayout />
            </PageWrapper>
          }
        >
          <Route
            index
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />
          <Route
            path="/products"
            element={
              <PageWrapper>
                <ProductsPage />
              </PageWrapper>
            }
          />
          <Route
            path="/products/:id"
            element={
              <PageWrapper>
                <ProductDetailsPage />
              </PageWrapper>
            }
          />
          <Route
            path="*"
            element={
              <PageWrapper>
                <NotFoundPage />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: -50, backgroundColor: "#000000" }}
      animate={{ opacity: 1, y: 0, backgroundColor: "#000000" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
