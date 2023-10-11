import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModal: false,
  },
  reducers: {
    closeModal: (state) => {
      return { ...state, isModal: false };
    },
    openModal: (state) => {
      return { ...state, isModal: true};
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
