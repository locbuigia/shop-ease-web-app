import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import items from "../data/products.json";
import { LuMinus, LuPlus } from "react-icons/lu";
import { QUANTITY_INCREMENT, QUANTITY_REDUCTION } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToUserCart,
  updateItemQuantityInUserCart,
} from "../features/userSlice";

import { store } from "../store";
import ProductCarousel from "../components/ProductCarousel";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const itemsInUserCart = useSelector((state) => state.user.itemsInUserCart);
  const [quantity, setQuantity] = useState(1);
  const [showProductInfo, setShowProductInfo] = useState(true);

  const { id } = useParams();
  const currentItem = items.find((item) => item.id === parseInt(id));

  const handleUpdateItemQty = (type) => {
    if (quantity === 1 && type === QUANTITY_REDUCTION) {
      return;
    }
    setQuantity(type === QUANTITY_INCREMENT ? quantity + 1 : quantity - 1);
  };

  const handleAddItemToCart = () => {
    const foundItem = itemsInUserCart.find((x) => x.id === parseInt(id));
    if (foundItem) {
      let itemToAdd = {
        ...foundItem,
        quantity: foundItem.quantity + quantity,
      };

      dispatch(updateItemQuantityInUserCart(itemToAdd));
    } else {
      let itemToAdd = {
        ...currentItem,
        quantity: quantity,
      };
      dispatch(addItemToUserCart(itemToAdd));
    }
    console.log(store.getState());
  };

  if (!currentItem) {
    return (
      <div className="flex flex-col justify-center items-center text-white w-full h-screen bg-black p-20">
        <h1 className="text-2xl mt-4">Item Not Found</h1>
        <button
          className="mt-8 rounded-sm bg-slate-700 border-2 p-2 hover:bg-white hover:text-black hover:border-black text-xl"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black w-full h-full py-20 px-4 md:px-40 text-white leading-loose">
      <div className="text-sm md:text-base flex w-full font-light mt-12 items-center">
        <Link to={"/"}>
          <h1 className="mr-2 hover:text-gray-400">Home</h1>
        </Link>
        <FaChevronRight className="mr-2" />
        <Link to="/products">
          <h1 className="mr-2 hover:text-gray-400">Products</h1>
        </Link>
        <FaChevronRight className="mr-2" />
        <h1>{currentItem.name}</h1>
      </div>
      <div className="md:flex justify-center items-center">
        <div className="md:mr-24">
          <div className="w-[20rem] h-[20rem] md:w-[32rem] md:h-[32rem]">
            <img src={currentItem.image} />
          </div>
          <p className="md:w-[32rem] font-light">
            This is a product description. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div>
          <h1 className="text-xl mt-10 md:text-3xl md:mt-0">
            {currentItem.name}
          </h1>
          <h3 className="font-light">
            SKU: {currentItem.id.toString().padStart(4, "0")}
          </h3>
          <h5 className="text-xl font-semibold mt-10">${currentItem.price}</h5>
          <div className="mt-10">
            <h5 className="font-light text-sm mb-2">Quantity:</h5>
            <div className="flex items-center w-28 justify-between space-x-2 py-2 border-[1px] border-white bg-white text-black">
              <button
                onClick={() => handleUpdateItemQty(QUANTITY_REDUCTION)}
                className="px-2 py-1 hover:scale-125 duration-200"
              >
                <LuMinus />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => handleUpdateItemQty(QUANTITY_INCREMENT)}
                className="px-2 py-1 hover:scale-125 duration-200"
              >
                <LuPlus />
              </button>
            </div>
          </div>
          <button
            onClick={handleAddItemToCart}
            className="mt-10 mb-4 text-base border-[1px] border-white px-20 py-4 text-white bg-black bg-opacity-20 hover:bg-white hover:text-black duration-300"
          >
            Add To Cart
          </button>
          <div className="space-y-4 mt-10">
            <button
              className="w-full hover:text-gray-500 duration-200"
              onClick={() => setShowProductInfo(!showProductInfo)}
            >
              <div className="flex justify-between">
                <h1>PRODUCT INFO</h1>
                {showProductInfo ? <LuMinus size={20} /> : <LuPlus size={20} />}
              </div>
            </button>
            <div className="overflow-hidden">
              <p
                className={`md:w-[32rem] font-light duration-300 ${
                  showProductInfo ? "translate-y-0" : "-translate-y-full"
                }`}
              >
                This is a product information. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ProductCarousel />
    </div>
  );
};

export default ProductDetailsPage;
