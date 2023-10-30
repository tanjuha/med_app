import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const doctorsCollectionRef = collection(db, "doctors");

  useEffect(() => {
    const getDoctors = async () => {
      const data = await getDocs(doctorsCollectionRef); // has a ton properties

      // set only needed data from "data" = [...] & id
      setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDoctors();
  }, []);

  return (
    <div className="">
      {doctors.map((doctor) => {
        return (
          <div className="" key={doctor.id}>
            <h1 className="">{doctor.name}</h1>
            <img src={doctor.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Doctors;
