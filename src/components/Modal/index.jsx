import React, { useState } from "react";
import "./modal.css";
import "../Form/form.css";
import DoctorCard from "../DoctorCard";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modal";
import { openAppointment, setDateAppointment } from "../../redux/appointment";

const Modal = ({ data }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const dispatch = useDispatch();
  const { firstName, profession, image, email, ratings } = data;

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(closeModal());
    dispatch(openAppointment());
    dispatch(
      setDateAppointment({
        name: name,
        doctor: firstName,
        speciality: profession,
        phone: phone,
        date: date,
        time: time,
      })
    );
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <DoctorCard
          name={firstName}
          imgUrl={image}
          job={profession}
          description={email}
          ratings={ratings}
          button={false}
        />
        <form className="form text-left" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPhone">Phone number</label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter your phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateAppointment">Date of Appointment</label>
            <input
              type="date"
              className="form-control"
              id="dateAppointment"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="timeSlot">Book Time Slot</label>
            <input
              type="time"
              className="form-control"
              id="timeSlot"
              min="09:00"
              max="18:00"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </div>
          <div>
            <Button
              label="Book New"
              type="submit"
              className="btn bg-primary w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
