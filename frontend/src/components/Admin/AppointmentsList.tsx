import React from 'react';
import IAppointment from '../../types/IAppointment';
import Appointment from './Appointment';

interface IAppointmentsListProps {
  appointmentsList: IAppointment[];
}

const AppointmentsList = ({ appointmentsList } : IAppointmentsListProps) => (
  <div>
    {appointmentsList.map((appointment, index) => (
      <Appointment appointment={appointment} index={index} />
    ))}
  </div>
)

export default AppointmentsList;
