import React from "react";
import items from "../data/products.json";
import FavoriteProduct from "./FavoriteProduct";

const Favorites = () => {
  return (
    <>
      <a name="favorites" />
      <div className="bg-black text-white w-full text-center py-12 justify-items-center">
        <h1 className="text-4xl font-serif">Our Favorites</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-11/12 justify-items-center font-serif">
          {items.map(
            (item) => item.isFavorite && <FavoriteProduct item={item} />
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
