import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isLoading: true,
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
  },
});

export const { loginUser, logoutUser, setLoading } = authSlice.actions;

export default authSlice.reducer;
