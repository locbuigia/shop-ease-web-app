import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setShowSearchModal } from "../features/appSlice";

import items from "../data/products.json";
import Divider from "./Divider";
import { Link } from "react-router-dom";

const SearchItemModal = () => {
  const dispatch = useDispatch();
  const showSearchModal = useSelector((state) => state.app.showSearchModal);

  const [searchInput, setSearchInput] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);

  const handleCloseModal = () => {
    dispatch(setShowSearchModal(false));
    setSearchInput("");
    setSearchedItems([]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.value;
    setSearchInput(input);
    if (input.length === 0) {
      setSearchedItems([]);
    } else {
      const foundItems = items.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
      );
      setSearchedItems(foundItems.slice(0, 4));
    }
  };

  return (
    <div
      className={`fixed inset-0 flex justify-end text-white z-50 duration-300 ${
        showSearchModal ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-full sm:w-[28rem] h-screen bg-black px-4 py-4 relative flex flex-col justify-between">
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 text-white hover:text-gray-600 focus:outline-none"
        >
          <MdClose size={30} />
        </button>
        <div className="flex flex-col items-center">
          <input
            className={`bg-transparent w-80 focus:bg-black p-2 focus:outline-none duration-300 text-xl`}
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => handleSearch(e)}
          />
          <Divider />
          {searchedItems.length === 0 && searchInput.length !== 0 && (
            <p className="text-xl mt-12">No product found!</p>
          )}
          {searchedItems.length > 0 &&
            searchedItems.map((item) => (
              <Link
                onClick={() => dispatch(setShowSearchModal(false))}
                to={`/products/${item.id}`}
                key={item.id}
                className="grid grid-cols-2 items-center justify-center"
              >
                <div className="w-32 h-32 mr-2">
                  <img src={item.image} />
                </div>
                <div>
                  <h1 className="text-xl mb-2">{item.name}</h1>
                  <p className="text-sm font-light">
                    This is an item information...
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchItemModal;
