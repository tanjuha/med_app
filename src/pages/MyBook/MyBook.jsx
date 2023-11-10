import React,  { useEffect, useState } from 'react'
import Navbar from "../../components/Navbar"
import DoctorCard from "../../components/DoctorCard"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const MyBook = () => {

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
             <Navbar/>
             <div className="flex justify-center flex-wrap">
          {doctors.map((doc) => {
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
                    // setModalData(doc);
                    // dispatch(openModal());
                  }}
                />
              );
            }
            
          })}
        </div>
        </div>
    )

}

export default MyBook;