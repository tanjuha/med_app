import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 20,
  },
  reducers: {
    increment: (state) => {
      return { ...state, value: state.value + 1 };
    },
    decrement: (state) => {
      return { ...state, value: state.value - 1 };
    }
  },
});

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
