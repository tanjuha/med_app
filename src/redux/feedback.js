import { createSlice } from "@reduxjs/toolkit";

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    isFeedback: false,
    feedback: "test",
    starRating: null,
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

    setStarRating: (state, action) => {
      const { number } = action.payload;

      return {
        ...state,
        starRating: number,
      };
    },
  },
});

export const { setFeedback, openFeedback, closeFeedback, setStarRating } =
  feedbackSlice.actions;

export default feedbackSlice.reducer;
