import React from "react";
import Button from "../../components/Button";
import "./findDoctor.css";
import DoctorCard from "../../components/DoctorCard";
import Navbar from "../../components/Navbar";

const FindDoctor = () => {
  return (
    <div className="container px-5">
      <Navbar />
      <div className="text-center">
        <h1 className="font-extrabold mt-12">Find a doctor at your own easy</h1>
        <img
          className="m-auto w-60"
          src={require("../../assets/images/cat/find.png")}
        />
        <form>
          <div className="form-group w-96 mx-auto mb-5">
            <input
              className="form-control"
              list="doctorList"
              placeholder="Select doctors by specialty"
            />
            <datalist id="doctorList">
              <option value="Dantist"></option>
              <option value="Dermatolog"></option>
            </datalist>
          </div>
        </form>
        <h2 className="font-extrabold text-xl">
          <span className="text-2xl text-primary">8</span> doctors available in
        </h2>
        <h3 className="font-semibold">
          Book appointments with minimum wait-time & verified doctor details
        </h3>
        <div className="flex justify-center flex-wrap">
          <DoctorCard
            name="Tom"
            imgUrl={require("../../assets/images/cat/grade.png")}
            job="Dantist"
            description="20 years experiens"
            ratings="4"
          />
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
