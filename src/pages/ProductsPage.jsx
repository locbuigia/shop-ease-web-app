import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import RangeSlider from "react-range-slider-input";
import items from "../data/products.json";

import {
  BAG_TYPE_ALL,
  BAG_TYPE_BACKPACK,
  BAG_TYPE_DUFFLE,
  BAG_TYPE_TRAVEL,
  PRODUCT_SORT_TYPE_NAME_ASC,
  PRODUCT_SORT_TYPE_NAME_DESC,
  PRODUCT_SORT_TYPE_PRICE_HIGH_TO_LOW,
  PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH,
  PRODUCT_SORT_TYPE_RECOMMENDED,
} from "../constants";

import {
  setProducts,
  setProductType,
  setProductSortByType,
  setMinPriceRange,
  setMaxPriceRange,
} from "../features/appSlice";

import "react-range-slider-input/dist/style.css";
import "../styles.css";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displayedItems = useSelector((state) => state.app.products);
  const productType = useSelector((state) => state.app.productType);
  const productSortByType = useSelector((state) => state.app.productSortByType);
  const minPriceRange = useSelector((state) => state.app.minPriceRange);
  const maxPriceRange = useSelector((state) => state.app.maxPriceRange);
  const [priceRangeValue, setPriceRangeValue] = useState([
    minPriceRange,
    maxPriceRange,
  ]);

  useEffect(() => {
    handleProductTypeChange(productType);
  }, []);

  const handleProductTypeChange = (type) => {
    let itemsByType =
      type === BAG_TYPE_ALL
        ? items
        : items.filter((item) => item.type === type);

    let minPrice = itemsByType.reduce((min, current) =>
      current.price < min.price ? current : min
    ).price;

    let maxPrice = itemsByType.reduce((max, current) =>
      current.price > max.price ? current : max
    ).price;

    dispatch(setProductSortByType(PRODUCT_SORT_TYPE_RECOMMENDED));
    dispatch(setProductType(type));
    dispatch(setProducts(itemsByType));
    dispatch(setMinPriceRange(minPrice));
    dispatch(setMaxPriceRange(maxPrice));
    setPriceRangeValue([minPrice, maxPrice]);
  };

  const handleSortTypeChange = (e) => {
    dispatch(setProductSortByType(e.target.value));
    const items = [...displayedItems];
    switch (e.target.value) {
      case PRODUCT_SORT_TYPE_RECOMMENDED:
        dispatch(setProducts(items));
        break;
      case PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH:
        dispatch(setProducts(items.sort((a, b) => a.price - b.price)));
        break;
      case PRODUCT_SORT_TYPE_PRICE_HIGH_TO_LOW:
        dispatch(setProducts(items.sort((a, b) => b.price - a.price)));
        break;
      case PRODUCT_SORT_TYPE_NAME_ASC:
        dispatch(
          setProducts(items.sort((a, b) => a.name.localeCompare(b.name)))
        );
        break;
      case PRODUCT_SORT_TYPE_NAME_DESC:
        dispatch(
          setProducts(items.sort((a, b) => b.name.localeCompare(a.name)))
        );
        break;
    }
  };

  const handlePriceRangeDragEnd = () => {
    const itemList =
      productType === BAG_TYPE_ALL
        ? items
        : items.filter((item) => item.type === productType);
    dispatch(
      setProducts(
        itemList.filter(
          (item) =>
            item.price >= priceRangeValue[0] && item.price <= priceRangeValue[1]
        )
      )
    );
  };

  return (
    <>
      <Navbar />
      <a name="top" />
      <div className="flex bg-black font-thin w-full py-20 font-serif">
        <div className="text-white mx-9 pt-5 leading-loose tracking-wide">
          <div className="flex font-thin text-base mb-10 items-center">
            <a onClick={() => navigate("/")}>
              <h1 className="mr-2 hover:text-gray-400">Home</h1>
            </a>
            <FaChevronRight className="mr-2" />
            <h1>Products</h1>
          </div>
          <h1 className="font-semibold">Browse by</h1>
          <p className="text-gray-500">___________________</p>
          <div className="flex flex-col items-start">
            <button
              onClick={() => handleProductTypeChange(BAG_TYPE_ALL)}
              className={`hover:text-gray-400 my-1 ${
                productType === BAG_TYPE_ALL && "underline"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => handleProductTypeChange(BAG_TYPE_BACKPACK)}
              className={`hover:text-gray-400 my-1 ${
                productType === BAG_TYPE_BACKPACK && "underline"
              }`}
            >
              Backpacks
            </button>
            <button
              onClick={() => handleProductTypeChange(BAG_TYPE_DUFFLE)}
              className={`hover:text-gray-400 my-1 ${
                productType === BAG_TYPE_DUFFLE && "underline"
              }`}
            >
              Duffle bags
            </button>
            <button
              onClick={() => handleProductTypeChange(BAG_TYPE_TRAVEL)}
              className={`hover:text-gray-400 my-1 ${
                productType === BAG_TYPE_TRAVEL && "underline"
              }`}
            >
              Travel bags
            </button>
          </div>
          <h1 className="font-semibold mt-16">Filter by</h1>
          <p className="text-gray-500">___________________</p>
          <h1>Price</h1>
          <div>
            <RangeSlider
              id="price-range-slider"
              className="mt-4"
              rangeSlideDisabled={true}
              min={minPriceRange}
              max={maxPriceRange}
              value={priceRangeValue}
              onInput={setPriceRangeValue}
              onThumbDragEnd={handlePriceRangeDragEnd}
            />
            <div className="flex justify-between text-sm mt-4">
              <p>${priceRangeValue[0]}</p>
              <p>${priceRangeValue[1]}</p>
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col w-10/12 mt-24">
          <h1 className="text-5xl mb-8 ml-20">All Products</h1>
          <div className="flex mx-20 justify-between">
            <h1>{displayedItems.length} products</h1>
            <div className="flex items-center font-serif font-thin hover:text-gray-400">
              <h1>Sort by: </h1>
              <select
                id="filter"
                value={productSortByType}
                onChange={handleSortTypeChange}
                className="px-4 py-2 bg-black"
              >
                <option value={PRODUCT_SORT_TYPE_RECOMMENDED}>
                  {"Recommended"}
                </option>
                <option value={PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH}>
                  {"Price (low to high)"}
                </option>
                <option value={PRODUCT_SORT_TYPE_PRICE_HIGH_TO_LOW}>
                  {"Price (high to low)"}
                </option>
                <option value={PRODUCT_SORT_TYPE_NAME_ASC}>
                  {"Name (A to Z)"}
                </option>
                <option value={PRODUCT_SORT_TYPE_NAME_DESC}>
                  {"Name (Z to A)"}
                </option>
              </select>
            </div>
          </div>

          {displayedItems === 0 && (
            <div className="h-96 mx-20 flex flex-col justify-center items-center">
              <h1 className="text-3xl">No product found!</h1>
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
