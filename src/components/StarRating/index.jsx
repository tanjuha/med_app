import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStarRating } from "../../redux/feedback";

import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const starRating = useSelector((state) => state.feedback.starRating);
  const dispatch = useDispatch();

  return (
    <span className="flex">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <span key={index}>
            <input
              className="hidden"
              type="radio"
              name="rating"
              value={currentRating}
            />
            <FaStar
              className="cursor-pointer"
              size={30}
              color={currentRating <= starRating ? "#ffc107" : "#9da0a8"}
              onMouseEnter={() =>
                dispatch(setStarRating({ number: currentRating }))
              }
            />
          </span>
        );
      })}
    </span>
  );
};

export default StarRating;
