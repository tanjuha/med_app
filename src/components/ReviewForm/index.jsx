import React from "react";
import Navbar from "../Navbar";

import "./reviewForm.css";

const ReviewForm = () => {
  return (
    <div className="container m-auto px-5">
      <Navbar />

      <div className="table-wrap">
        <table className="table">
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
              <td>1</td>
              <td>Dr. Tom Tomass</td>
              <td>Dermatology</td>
              <td>
                <button className="btn bg-primary">Give Review</button>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Dr. Sem Semss</td>
              <td>Dermatology</td>
              <td>
                <button disabled className="btn bg-gray-400">Give Review</button>
              </td>
              <td className="feedback">Excellent consultation</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewForm;
