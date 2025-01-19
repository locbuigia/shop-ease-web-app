import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userName: "",
  userEmail: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginStatus: (state, action) => {
      console.log(action);
      state.isLoggedIn = action.payload;
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
    updateUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

export const { setUserLoginStatus, updateUserName, updateUserEmail } =
  userSlice.actions;

export default userSlice.reducer;
