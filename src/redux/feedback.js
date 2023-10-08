import { createSlice } from "@reduxjs/toolkit";

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    isFeedback: false,
    feedback: "test",
  },
  reducers: {
    openFeedback: (state) => {
      return {
        ...state,
        isFeedback: true,
      };
    },
    closeFeedback: (state) => {
      return {
        ...state,
        isFeedback: false,
      };
    },
    setFeedback: (state, action) => {
      const { text } = action.payload;

      return {
        ...state,
        feedback: text,
      };
    },
  },
});

export const { setFeedback, openFeedback, closeFeedback } = feedbackSlice.actions;

export default feedbackSlice.reducer;
