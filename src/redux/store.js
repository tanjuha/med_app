import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import modalReducer from "./modal";

export default configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
  },
});
