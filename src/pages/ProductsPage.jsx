import React from "react";
import Navbar from "../components/Navbar";
import items from "../data/products.json";
import FavoriteProduct from "../components/FavoriteProduct";

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black font-thin w-full py-20 font-serif">
        <div className="text-white lg:ml-64 md:ml-24 sm:ml-8">
          <h1 className="text-4xl mb-8">All Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 justify-items-center">
            {items.map((item) => (
              <FavoriteProduct key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
