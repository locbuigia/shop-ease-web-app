import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  showLoginModal: false,
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
  },
});

export const { setIsLoading, setShowLoginModal } = appSlice.actions;

export default appSlice.reducer;
