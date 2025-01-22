import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setShowCartModal } from "../features/appSlice";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuMinus, LuPlus } from "react-icons/lu";
import {
  updateItemQuantityInUserCart,
  removeItemFromUserCart,
} from "../features/userSlice";
import { QUANTITY_INCREMENT, QUANTITY_REDUCTION } from "../constants";
import { pluralize } from "../utils";
import Divider from "./Divider";

const CartModal = () => {
  const dispatch = useDispatch();
  const showCartModal = useSelector((state) => state.app.showCartModal);
  const itemsInUserCart = useSelector((state) => state.user.itemsInUserCart);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userName = useSelector((state) => state.user.userName);

  const displayedUser = isUserLoggedIn ? userName : "Guest";

  const handleUpdateItemQty = (item, type) => {
    if (type === QUANTITY_REDUCTION && item.quantity === 1) {
      return;
    }
    const updatedItem = {
      ...item,
      quantity:
        type === QUANTITY_INCREMENT ? item.quantity + 1 : item.quantity - 1,
    };
    dispatch(updateItemQuantityInUserCart(updatedItem));
  };

  const handleRemoveItemFromCart = (item) => {
    dispatch(removeItemFromUserCart(item));
  };

  return (
    <div className="">
      <div
        className={`inset-0 w-full h-full fixed duration-500 ${
          showCartModal ? "z-40 bg-opacity-30 bg-white" : "-z-50"
        }`}
      ></div>
      <div
        className={`fixed inset-0 flex justify-end text-white z-50 transition-transform duration-500 ${
          showCartModal ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full sm:w-[28rem] h-screen bg-black px-4 py-4 relative flex flex-col justify-between">
          <button
            onClick={() => dispatch(setShowCartModal(false))}
            className="absolute top-4 right-4 text-white hover:text-gray-600 focus:outline-none"
          >
            <MdClose size={30} />
          </button>
          <div>
            <h3 className="text-lg">{`Hi ${displayedUser},`}</h3>
            <div className="flex items-center">
              <h3 className="text-base mr-2">Cart Details</h3>
              <p className="text-base font-thin">
                {`(${itemsInUserCart.length} ${pluralize(
                  itemsInUserCart.length,
                  "item",
                  "items"
                )})`}
              </p>
            </div>
            <Divider />
            {itemsInUserCart.length === 0 ? (
              <div className="w-full h-full flex justify-center items-center">
                <p>Your cart is empty.</p>
              </div>
            ) : (
              <ul className="space-y-4 h-[30rem] mt-2 overflow-y-auto">
                {itemsInUserCart.map((item, index) => (
                  <li key={index} className="w-full flex justify-between pr-4">
                    <div className="flex">
                      <div className="sm:w-32 sm:h-32 mr-4">
                        <img src={item.image} />
                      </div>
                      <div className="space-y-4 w-60">
                        <p className="font-semibold ">{item.name}</p>
                        <p className="text-sm font-thin">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="sm:flex w-full justify-between">
                          <div className="flex items-center w-28 justify-between sm:space-x-2 border-[1px] border-white">
                            <button
                              onClick={() =>
                                handleUpdateItemQty(item, QUANTITY_REDUCTION)
                              }
                              className="px-2 py-1 text-white"
                            >
                              <LuMinus />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                handleUpdateItemQty(item, QUANTITY_INCREMENT)
                              }
                              className="px-2 py-1 text-white"
                            >
                              <LuPlus />
                            </button>
                          </div>
                          <p className="mt-4 sm:mt-0">
                            ${(item.quantity * item.price).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => handleRemoveItemFromCart(item)}
                        className="text-red-500 hover:scale-125 duration-300 mt-10 sm:mt-0"
                      >
                        <RiDeleteBinLine size={20} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {itemsInUserCart.length > 0 && (
            <div>
              <Divider />
              <div className="flex justify-between sm:mt-1">
                <p className="font-thin">Subtotal:</p>
                <p className="pr-1">
                  $
                  {itemsInUserCart
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <div className="mt-4 sm:mt-8 sm:mb-6 flex justify-center">
                <button className="w-64 border-2 border-black p-2 text-black bg-white hover:bg-black hover:text-white hover:border-white duration-300">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
