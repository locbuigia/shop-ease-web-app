import React from "react";
import { useSelector } from "react-redux";
import ProductFilter from "../components/ProductFilter";
import Product from "../components/Product";

import ProductSort from "../components/ProductSort";

const ProductsPage = () => {
  const displayedItems = useSelector((state) => state.app.products);
  return (
    <>
      <a name="top" />
      <div className="flex bg-black w-full py-20 ">
        <ProductFilter />
        <div className="text-white flex flex-col w-10/12 mt-24">
          <h1 className="text-5xl mb-8 ml-20">All Products</h1>
          <ProductSort />
          {displayedItems.length === 0 && (
            <div className="h-96 mx-20 flex flex-col justify-center items-center">
              <h1 className="text-white text-3xl">No product found!</h1>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
            {displayedItems.length > 0 &&
              displayedItems.map((item) => (
                <Product key={item.id} item={item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
