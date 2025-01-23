import React from "react";
import { useSelector } from "react-redux";
import ProductFilter from "../components/ProductFilter";
import Product from "../components/Product";

import ProductSort from "../components/ProductSort";

const ProductsPage = () => {
  const displayedItems = useSelector((state) => state.app.products);
  return (
    <div className="sm:flex bg-black w-full py-20">
      <ProductFilter />
      <div className="w-full text-white flex flex-col mt-4 sm:mt-24 px-4">
        <h1 className="text-2xl md:text-5xl my-8 md:my-4 md:ml-20 px-5">
          All Products
        </h1>
        <ProductSort />
        {displayedItems.length === 0 && (
          <div className="h-96 mx-20 flex flex-col justify-center items-center">
            <h1 className="text-white text-3xl">No product found!</h1>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:mx-10">
          {displayedItems.length > 0 &&
            displayedItems.map((item) => <Product key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
