import React from 'react';
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next';
import IAppointment from '../../types/IAppointment';
import Appointment from './Appointment';

interface IAppointmentsListProps {
  appointmentsList: IAppointment[];
}

const AppointmentsList = ({ appointmentsList } : IAppointmentsListProps) => {
  const { t } = useTranslation();

  return (
    <div className="col-md-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>{ t('date') }</th>
            <th>{ t('hour from') }</th>
            <th>{ t('hour to') }</th>
            <th>{ t('patient first name') }</th>
            <th>{ t('patient last name') }</th>
            <th>{ t('cancel') }</th>
          </tr>
        </thead>
        <tbody>
          {appointmentsList.map((appointment, index) => (
            <Appointment appointment={appointment} index={index} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AppointmentsList;
