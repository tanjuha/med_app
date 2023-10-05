import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button";
import { cancelAppointment, closeInstantlyBook } from "../../redux/appointment";
import { closeModal } from "../../redux/modal";

const CancelAppointment = ({ isInstantly }) => {
  const appointment = useSelector((state) => state.appointment);
  const { date, doctor, name, phone, speciality, time } = appointment.value;

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(cancelAppointment());
    dispatch(closeInstantlyBook())
    dispatch(closeModal());
  };

  return (
    <div>
      <h6 className="mb-2 font-extrabold text-xl">Appointment Booked!</h6>
      <ul className="list-none text-sm">
        {isInstantly ? (
          <>
            <li>
              <span className="font-bold">Name:</span> {name}
            </li>
            <li>
              <span className="font-bold">Phone Number:</span> {phone}
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
      <Button
        className="btn bg-primary w-full mt-5"
        onClick={onClick}
        label="Cancel Appointment"
      />
    </div>
  );
};

export default CancelAppointment;
