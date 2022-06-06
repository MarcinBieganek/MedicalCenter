import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';
import IAppointment from '../../types/IAppointment';
import AppointmentsList from './AppointmentsList';

const AdminAppointments = () => {
  const { t } = useTranslation();

  const [appointmentsList] = useState<IAppointment[]>([
    {
      id: v4(), patientFirstName: 'Pacjent', patientLastName: 'Nowak', date: '10.05.2022', startHour: '14:15', endHour: '14:30', avilable: true,
    },
    {
      id: v4(), patientFirstName: 'Nowy', patientLastName: 'Pacjent', date: '11.05.2022', startHour: '14:20', endHour: '14:40', avilable: true,
    },
    {
      id: v4(), patientFirstName: 'Pacjent', patientLastName: 'Nowak', date: '12.05.2022', startHour: '10:00', endHour: '10:20', avilable: false,
    }]);

  return (
    <main style={{ padding: '1rem 0' }}>
      <h3>{ t('bookedAppointments') }</h3>
      <AppointmentsList appointmentsList={appointmentsList} />
    </main>
  );
}

export default AdminAppointments;
