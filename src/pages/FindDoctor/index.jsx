import React, { useState } from "react";
import DoctorCard from "../../components/DoctorCard";
import Navbar from "../../components/Navbar";
import Modal from "../../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/modal";

const FindDoctor = ({
  title = "Find a doctor at your own easy",
  isInstantly = false,
}) => {
  const { doctors } = require("../../services/doctors.json");
  const { professions } = require("../../services/professions.json");

  const [filterList, setFilterList] = useState(doctors);
  const [numberAvailableDoc, setNumberAvailableDoc] = useState(doctors?.length);

  const [modalData, setModalData] = useState(null);

  const modal = useSelector((state) => state.modal.isModal);
  const dispatch = useDispatch();

  const filterBySearch = (event) => {
    const value = event.target.value.toLowerCase();

    const updateList = doctors.filter((doc) => {
      return doc.profession.toLowerCase().includes(value);
    });

    setFilterList(updateList);
    setNumberAvailableDoc(updateList.length);
  };

  return (
    <div className="container px-5">
      <Navbar />
      <div className="text-center">
        <h1 className="font-extrabold mt-12">{title}</h1>
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
              onChange={filterBySearch}
            />
            <datalist id="doctorList">
              {professions?.map((pro) => (
                <option key={pro.id} value={pro.profession}></option>
              ))}
            </datalist>
          </div>
        </form>
        <h2 className="font-extrabold text-xl">
          <span className="text-2xl text-primary">{numberAvailableDoc}</span>{" "}
          doctors available in
        </h2>
        <h3 className="font-semibold">
          Book appointments with minimum wait-time & verified doctor details
        </h3>
        <div className="flex justify-center flex-wrap">
          {filterList.map((doc) => {
            if(doc.available) {
              return (
                <DoctorCard
                  key={doc.id}
                  name={doc.firstName}
                  imgUrl={doc.image}
                  job={doc.profession}
                  description={doc.email}
                  ratings={doc.ratings}
                  available={doc.available}
                  btnOnClick={() => {
                    setModalData(doc);
                    dispatch(openModal());
                  }}
                />
              );
            }
          })}
        </div>
        {modal && <Modal data={modalData} isInstantly={isInstantly} />}
      </div>
    </div>
  );
};

export default FindDoctor;
