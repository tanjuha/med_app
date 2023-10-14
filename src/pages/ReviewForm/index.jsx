import React from "react";
import Navbar from "../../components/Navbar";

import "./reviewForm.css";
import Feedback from "../../components/Feedback";
import { useSelector, useDispatch } from "react-redux";
import { openFeedback } from "../../redux/feedback";

const ReviewForm = () => {
  const { doctors } = require("../../services/doctors.json");

  const { feedback, isFeedback } = useSelector((state) => state.feedback);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(openFeedback());
  };

  return (
    <div className="container m-auto px-5">
      <Navbar />
      <div className="table-wrap">
        <table className="table m-auto">
          <caption>
            <h1 className="font-extrabold mt-12 mb-5">Reviews</h1>
          </caption>
          <thead className="bg-gray-200">
            <tr>
              <th>Serial Number</th>
              <th>Doctor Name</th>
              <th>Doctor Speciality</th>
              <th>Provide Feedback</th>
              <th>Review Given</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>Dr. Sem Semss</td>
              <td>Dermatology</td>
              <td>
                <button disabled className="btn bg-gray-400">
                  Give Review
                </button>
              </td>
              <td className="feedback">{feedback}</td>
            </tr>
            {doctors?.map((doc, index) => (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.firstName} {doc.lastName}</td>
                <td>{doc.profession}</td>
                <td>
                  <button onClick={handleClick} className="btn bg-primary">
                    Give Review
                  </button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isFeedback && <Feedback />}
    </div>
  );
};

export default ReviewForm;
