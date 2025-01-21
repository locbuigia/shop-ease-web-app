import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PRODUCT_SORT_TYPE_NAME_ASC,
  PRODUCT_SORT_TYPE_NAME_DESC,
  PRODUCT_SORT_TYPE_PRICE_HIGH_TO_LOW,
  PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH,
  PRODUCT_SORT_TYPE_RECOMMENDED,
} from "../constants";

import { setProducts, setProductSortByType } from "../features/appSlice";

const ProductSort = () => {
  const dispatch = useDispatch();
  const displayedItems = useSelector((state) => state.app.products);
  const productSortByType = useSelector((state) => state.app.productSortByType);

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

  return (
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
          <option value={PRODUCT_SORT_TYPE_RECOMMENDED}>{"Recommended"}</option>
          <option value={PRODUCT_SORT_TYPE_PRICE_LOW_TO_HIGH}>
            {"Price (low to high)"}
          </option>
          <option value={PRODUCT_SORT_TYPE_PRICE_HIGH_TO_LOW}>
            {"Price (high to low)"}
          </option>
          <option value={PRODUCT_SORT_TYPE_NAME_ASC}>{"Name (A to Z)"}</option>
          <option value={PRODUCT_SORT_TYPE_NAME_DESC}>{"Name (Z to A)"}</option>
        </select>
      </div>
    </div>
  );
};

export default ProductSort;
