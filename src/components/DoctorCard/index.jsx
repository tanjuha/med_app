import React from "react";
import Button from "../Button";
import { BsCheckLg, BsFillStarFill } from "react-icons/bs";

const DoctorCard = ({
  name,
  imgUrl,
  job,
  description,
  ratings,
  button = true,
  btnOnClick,
  booked = false,
  available = true,
}) => {
  return (
    <div className="card p-0">
      <img src={imgUrl} />
      <span className="text-2xl font-extrabold block">{name}</span>
      <span>{job}</span>
      <p className="text-lg font-bold text-gray-400">{description}</p>
      <div className="flex justify-center items-center">
        <span className="text-lg font-extrabold mr-1">Ratings: </span>{" "}
        {[...Array(Number(ratings))].map((e, i) => (
          <BsFillStarFill key={i} color="yellow" />
        ))}
      </div>
      {button && (
        <>
          {available ? (
            <Button
              onClick={btnOnClick}
              className="bg-primary text-white font-bold p-5 w-full mt-4 rounded-lg"
              label="Book Appointment No Booking Free"
            ></Button>
          ) : (
            <Button
              onClick={btnOnClick}
              className="bg-red-600 text-white font-bold p-5 w-full mt-4 rounded-lg"
              label="Cancel Appointment No Booking Free"
            ></Button>
          )}
        </>
      )}
    </div>
  );
};

export default DoctorCard;
