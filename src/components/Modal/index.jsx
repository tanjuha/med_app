import React from "react";
import "./modal.css";
import "../Form/form.css";
import DoctorCard from "../DoctorCard";
import Button from "../Button";

const Modal = () => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <DoctorCard
          name="Tom"
          imgUrl={require("../../assets/images/cat/top.png")}
          job="Dentist"
          description="3 y exp"
          ratings="5"
          button={false}
        />
        <form className="form text-left">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPhone">Phone number</label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter your phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateAppointment">Date of Appointment</label>
            <input type="date" className="form-control" id="dateAppointment" />
          </div>
          <div className="form-group">
            <label htmlFor="timeSlot">Book Time Slot</label>
            <input
              type="time"
              className="form-control"
              id="timeSlot"
              min="09:00"
              max="18:00"
            />
          </div>
          <div>
            <Button label="Book New" type="submit" className="btn bg-primary w-full" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
