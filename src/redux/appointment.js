import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    isAppointment: false,
    isAppointmentBooked: false,
    value: {
      doctor: "tom",
      speciality: "dentest",
      name: "sem",
      phone: "1234566",
      date: "11.33.55",
      time: "11:33",
    },
    isInstantly: false,
  },
  reducers: {
    closeAppointment: (state) => {
      return { ...state, isAppointment: false, isAppointmentBooked: true };
    },
    cancelAppointment: (state) => {
      return { ...state, isAppointment: false, isAppointmentBooked: false };
    },
    openAppointment: (state) => {
      return { ...state, isAppointment: true };
    },
    setDateAppointment: (state, action) => {
      const { doctor, speciality, name, phone, date, time } = action.payload;

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
      };
    },
    closeInstantlyBook: (state) => {
      return { ...state, isInstantly: false };
    },
    setInstantlyBook: (state) => {
      return { ...state, isInstantly: true };
    },
  },
});

export const {
  closeAppointment,
  openAppointment,
  setDateAppointment,
  cancelAppointment,
  closeInstantlyBook,
  setInstantlyBook,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
