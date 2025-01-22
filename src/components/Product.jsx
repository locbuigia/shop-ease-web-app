import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToUserCart,
  updateItemQuantityInUserCart,
} from "../features/userSlice";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const itemsInUserCart = useSelector((state) => state.user.itemsInUserCart);
  const handleAddItemToCart = () => {
    const foundItem = itemsInUserCart.find((x) => x.id === item.id);
    if (foundItem) {
      let itemToAdd = {
        ...foundItem,
        quantity: foundItem.quantity + 1,
      };

      dispatch(updateItemQuantityInUserCart(itemToAdd));
    } else {
      let itemToAdd = {
        ...item,
        quantity: 1,
      };
      dispatch(addItemToUserCart(itemToAdd));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Link to={`/products/${item.id}`}>
        <div
          key={item.id}
          className="flex flex-col justify-center items-center w-96 h-96 hover:scale-110 duration-300 my-12"
        >
          <img className="p-12" src={item.image} />
          <h1 className="text-sm md:text-2xl">{item.name.toUpperCase()}</h1>
          <p className="text-sm md:text-base mt-2 font-thin">${item.price}</p>
        </div>
      </Link>
      <button
        onClick={handleAddItemToCart}
        className="mt-10 mb-4 text-sm border-2 border-white p-2 text-white bg-black bg-opacity-20 hover:bg-white hover:text-black duration-300"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
