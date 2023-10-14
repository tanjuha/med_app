import React from "react";
import Navbar from "../../components/Navbar";
import FindDoctor from "../FindDoctor";

const FindDoctorInstantly = () => {
  return (
    <FindDoctor
      title="Find a doctor and Consult instantly"
      isInstantly={true}
    />
  );
};

export default FindDoctorInstantly;
