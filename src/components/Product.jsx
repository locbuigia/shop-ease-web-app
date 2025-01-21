import React from "react";

const Product = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col justify-center items-center w-96 h-96 hover:scale-110 duration-300 my-12"
    >
      <img className="p-12" src={item.image} />
      <h1 className="text-sm md:text-2xl">{item.name.toUpperCase()}</h1>
      <p className="text-sm md:text-base mt-2 font-thin">${item.price}</p>
    </div>
  );
};

export default Product;
