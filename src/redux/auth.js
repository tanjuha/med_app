import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isLoading: true,
    userPhone: "030 00 404 04",
  },
  reducers: {
    loginUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
    logoutUser: (state) => {
      return { ...state, currentUser: null };
    },
    setLoading: (state, action) => {
      return { ...state, isLoading: action.payload };
    },
    setUserPhone: (state, action) => {
      return { ...state, userPhone: action.payload };
    },
    editUserName: (state, action) => {
      return { ...state, currentUser: {...state.currentUser, username: action.payload}}
    }
  },
});

export const { loginUser, logoutUser, setLoading, setUserPhone, editUserName } =
  authSlice.actions;

export default authSlice.reducer;
