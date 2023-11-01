import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc, updateDoc,deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const Doctors = () => {
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState(0);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [ratings, setRatings] = useState(0);
  const [phone, setPhone] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [newRatings, setNewRatings] = useState(0);
  

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    await addDoc(doctorsCollectionRef, {
      available: true,
      email,
      experience,
      image,
      name,
      phone,
      ratings,
      speciality,
    });
  };

  const updateRatings = async (id) => {
    const doctorDoc = doc(db, "doctors", id)

    await updateDoc(doctorDoc,{ratings : newRatings} )
  }

  const deleteDoctor = async (id) => {
    const doctorDoc = doc(db, "doctors", id)

    await deleteDoc(doctorDoc)

  }

  return (
    <div className="">
      <h2>Crate doctor</h2>
      <form className="form text-left" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <input
            type="number"
            placeholder="Experience"
            onChange={(event) => setExperience(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="text"
            placeholder="Image"
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            placeholder="Phone"
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Ratings:</label>
          <input
            type="number"
            placeholder="from 0 to 5"
            onChange={(event) => setRatings(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Speciality:</label>
          <input
            type="text"
            placeholder="Dentist"
            onChange={(event) => setSpeciality(event.target.value)}
          />
        </div>
        <button className="btn bg-primary">Create Doctor</button>
      </form>

      <h2>List doctors: </h2>
      {doctors.map((doctor) => {
        return (
          <ul className="" key={doctor.id}>
            <li>
              <b className="">{doctor.name}</b>
              <img width="100" src={doctor.image} alt="" />
              <b>{doctor.ratings}</b> 
              <input type="number"  placeholder="new rating"
               onChange={(event) => setNewRatings(event.target.value)}
              />
              <button onClick={() => updateRatings(doctor.id)} className="btn bg-yellow-600">Update Ratings</button>
              <button onClick={() => deleteDoctor(doctor.id)} className="btn bg-red-700">Delete Doctor</button>
              <br />
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Doctors;
