import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

function BestServices() {
  return (
    <div className="container px-5">
      <Navbar />
      <div className="text-center">
        <h1 className="font-extrabold mt-12 mb-5">Best Services</h1>
        <p>Take care of your body. It's the only place you have to live.</p>
       <div className="flex justify-between">
       <Card
          label="Instant Consultation"
          imgUrl={require("../../assets/images/cat/consultation.png")}
          path="/"
        />
        <Card
          label="Book an Appointment"
          imgUrl={require("../../assets/images/cat/business.png")}
          path="/find-doctor"
        />
        <Card
          label="Self Checkup"
          imgUrl={require("../../assets/images/cat/checkup.png")}
          path="/"
        />
        <Card
          label="Health Tips and Guidance"
          imgUrl={require("../../assets/images/cat/tips.png")}
          path="/"
        />
       </div>
      </div>
    </div>
  );
}

export default BestServices;
