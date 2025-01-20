import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registeredUsers: [
    {
      userName: "John Doe",
      userEmail: "jdoe@gmail.com",
      userPassword: "jdoe9",
    },
  ],
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
    addNewRegisterUser: (state, action) => {
      state.registeredUsers = [...state.registeredUsers, action.payload];
    },
  },
});

export const {
  setUserLoginStatus,
  updateUserName,
  updateUserEmail,
  addNewRegisterUser,
} = userSlice.actions;

export default userSlice.reducer;
