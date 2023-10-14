import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeFeedback, setFeedback } from "../../redux/feedback";

import { MdClose } from "react-icons/md";
import Button from "../Button";
import StarRating from "../StarRating";

import "./feedback.css";

const Feedback = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(setFeedback({ text: text }));
    dispatch(closeFeedback());
  };

  return (
    <div className="feedback modal">
      <div className="modal-content">
        <button className="close" onClick={() => dispatch(closeFeedback())}>
          <MdClose />
        </button>
        <form className="form text-left" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Review:</label>
            <textarea
              className="form-control"
              placeholder="Enter your Feedback"
              rows="4"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <StarRating />
          </div>
          <div>
            <Button
              label="Submit"
              type="submit"
              className="btn bg-primary w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
