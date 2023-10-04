import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import modalReducer from "./modal";
import appointmentReducer from "./appointment";

export default configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    appointment: appointmentReducer,
  },
});
