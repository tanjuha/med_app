import React from "react";
import "./appointmentDetails.css"

const AppointmentDetails = ({doctor, speciality, name, phone, date, time}) => {
  return (
    <div className="appointmentDetails">
      <h6 className="mb-2 font-extrabold text-lg">Appointment Details</h6>
      <ul className="list-none text-sm">
        <li>
          <span className="font-bold">Doctor:</span> {doctor}
        </li>
        <li>
          <span className="font-bold">Speciality:</span> {speciality}
        </li>
        <li>
          <span className="font-bold">Name:</span> {name}
        </li>
        <li>
          <span className="font-bold">Phone Number:</span> {phone}
        </li>
        <li>
          <span className="font-bold">Date of Appointment:</span> {date}
        </li>
        <li>
          <span className="font-bold">Time Slot:</span> {time}
        </li>
      </ul>
    </div>
  );
};

export default AppointmentDetails;
