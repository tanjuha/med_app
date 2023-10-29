import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import appointmentReducer from "./appointment";
import feedbackReducer from "./feedback";
import authReducer from "./auth";

export default configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    appointment: appointmentReducer,
    feedback: feedbackReducer,
  },
});
