import { createSlice } from "@reduxjs/toolkit";
import { BAG_TYPE_ALL, PRODUCT_SORT_TYPE_RECOMMENDED } from "../constants";
import products from "../data/products.json";

const initialState = {
  products: products,
  isLoading: false,
  showLoginModal: false,
  showCartModal: false,
  showSideMenu: false,
  showSearchResultModal: false,
  productType: BAG_TYPE_ALL,
  productSortByType: PRODUCT_SORT_TYPE_RECOMMENDED,
  minPriceRange: 0,
  maxPriceRange: 0,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setShowLoginModal: (state, action) => {
      state.showLoginModal = action.payload;
    },
    setShowCartModal: (state, action) => {
      state.showCartModal = action.payload;
    },
    setShowSideMenu: (state, action) => {
      state.showSideMenu = action.payload;
    },
    setShowSearchResultModal: (state, action) => {
      state.showSearchResultModal = action.payload;
    },
    setMinPriceRange: (state, action) => {
      state.minPriceRange = action.payload;
    },
    setMaxPriceRange: (state, action) => {
      state.maxPriceRange = action.payload;
    },
    setProductType: (state, action) => {
      state.productType = action.payload;
    },
    setProductSortByType: (state, action) => {
      state.productSortByType = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  setIsLoading,
  setShowLoginModal,
  setShowCartModal,
  setShowSideMenu,
  setShowSearchResultModal,
  setMinPriceRange,
  setMaxPriceRange,
  setProductType,
  setProductSortByType,
  setProducts,
} = appSlice.actions;

export default appSlice.reducer;
