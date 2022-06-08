import React from 'react';
import Table from 'react-bootstrap/Table';
import IAppointment from '../../types/IAppointment';
import Appointment from './Appointment';

interface IAppointmentsListProps {
  appointmentsList: IAppointment[];
}

const AppointmentsList = ({ appointmentsList } : IAppointmentsListProps) => (
  <div className="col-md-5">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Data</th>
          <th>Godzina od</th>
          <th>Godzina do</th>
          <th>Imię pacjenta</th>
          <th>Nazwisko pacjenta</th>
          <th>Odwołaj</th>
        </tr>
      </thead>
      <tbody>
        {appointmentsList.map((appointment, index) => (
          <Appointment appointment={appointment} index={index} />
        ))}
      </tbody>
    </Table>
  </div>
)

export default AppointmentsList;
