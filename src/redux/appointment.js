import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    isAppointment: false,
    value: {
      doctor: "tom",
      speciality: "dentest",
      name: "sem",
      phone: "1234566",
      date: "11.33.55",
      time: "11:33",
    },
  },
  reducers: {
    closeAppointment: (state) => {
      return { ...state, isAppointment: false };
    },
    openAppointment: (state) => {
      return { ...state, isAppointment: true };
    },
    setDateAppointment: (state, action) => {
      const {doctor, speciality, name, phone, date, time} = action.payload
      
      return {
        ...state,
        value: {
          doctor,
          speciality,
          name,
          phone,
          date,
          time,
        },
        isAppointment: true,
      }
    }
  },
});

export const { closeAppointment, openAppointment, setDateAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer;