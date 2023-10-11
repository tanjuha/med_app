import React from "react";
import Navbar from "../../components/Navbar";

const Reports = () => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container m-auto px-5">
      <Navbar />
      <div className="table-wrap">
        <table className="table m-auto">
          <caption>
            <h1 className="font-extrabold mt-12 mb-5">Reports</h1>
          </caption>
          <thead className="bg-gray-200">
            <tr>
              <th>Serial Number</th>
              <th>Doctor Name</th>
              <th>Doctor Speciality</th>
              <th>View Report</th>
              <th>Download Report</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>Dr. Sem Semss</td>
              <td>Dermatology</td>
              <td>
                <button onClick={handleClick} className="btn bg-primary">
                  View Report
                </button>
              </td>
              <td>
                <button onClick={handleClick} className="btn bg-primary">
                  Download Report
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
