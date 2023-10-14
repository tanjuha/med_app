import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import appointmentReducer from "./appointment";
import feedbackReducer from "./feedback";

export default configureStore({
  reducer: {
    modal: modalReducer,
    appointment: appointmentReducer,
    feedback: feedbackReducer,
  },
});
