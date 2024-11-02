import React, { createContext, useState, useContext } from 'react';
import { DoctorsImages } from '../../constants/DoctorsImages';

const AppointmentsContext = createContext();

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([
    // Initial appointments
    {
      image: DoctorsImages.doctor5,
      doctorName: 'Dr. Jessica Turner',
      category: 'Gynecologist',
      location: "Women's Clinic, Seattle, USA",
      time: '2024-11-09 - 01:00 PM',
    },
    {
      image: DoctorsImages.doctor3,
      doctorName: 'Dr. Michael Johnson',
      category: 'Orthopedic Surgery',
      location: 'Maple Associates, NY, USA',
      time: '2024-11-09 - 02:30 PM',
    },
  ]);

  const addAppointment = (newAppointment) => {
    setAppointments(prev => [...prev, newAppointment]);
  };
  const removeAppointment = (doctorName) => {
    setAppointments(prev => prev.filter(appointment => appointment.doctorName !== doctorName));
  };
  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment, removeAppointment}}>
      {children}
    </AppointmentsContext.Provider>
  );
};

export const useAppointments = () => useContext(AppointmentsContext);
