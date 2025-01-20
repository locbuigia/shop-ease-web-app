import React from "react";

const Product = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col justify-center items-center w-72 h-72 hover:scale-110 transition-transform duration-300 my-12"
    >
      <img className="p-12" src={item.image} />
      <h1 className="text-sm md:text-2xl font-thin">
        {item.name.toUpperCase()}
      </h1>
      <p className="text-sm md:text-lg mt-2">{item.price}</p>
    </div>
  );
};

export default Product;
