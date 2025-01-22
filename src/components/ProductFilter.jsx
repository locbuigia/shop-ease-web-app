import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import RangeSlider from "react-range-slider-input";
import items from "../data/products.json";

import {
  BAG_TYPE_ALL,
  BAG_TYPE_BACKPACK,
  BAG_TYPE_DUFFLE,
  BAG_TYPE_TRAVEL,
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
import Divider from "./Divider";

const ProductFilter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productType = useSelector((state) => state.app.productType);
  const minPriceRange = useSelector((state) => state.app.minPriceRange);
  const maxPriceRange = useSelector((state) => state.app.maxPriceRange);

  const [searchParams] = useSearchParams();

  const [priceRangeValue, setPriceRangeValue] = useState([
    minPriceRange,
    maxPriceRange,
  ]);

  useEffect(() => {
    if (searchParams.get("type")) {
      handleProductTypeChange(searchParams.get("type"));
    } else {
      handleProductTypeChange(BAG_TYPE_ALL);
    }
  }, [searchParams]);

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
    <div className="sm:block text-sm sm:text-base text-white mx-9 pt-5 leading-loose tracking-wide font-thin">
      <div className="flex font-thin mb-10 items-center">
        <button onClick={() => navigate("/")}>
          <h1 className="mr-2 hover:text-gray-400">Home</h1>
        </button>
        <FaChevronRight className="mr-2" />
        <h1>Products</h1>
      </div>
      <h1 className="font-bold">Browse by</h1>
      <Divider />
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
      <h1 className="font-bold mt-16">Filter by</h1>
      <Divider />
      <h1>Price</h1>
      <div className="mt-4 max-w-44">
        <RangeSlider
          id="price-range-slider"
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
  );
};

export default ProductFilter;
