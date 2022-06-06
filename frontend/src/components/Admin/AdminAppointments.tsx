import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import api from '../../services/backend';

import IAppointment from '../../types/IAppointment';
import AppointmentsList from './AppointmentsList';

const AdminAppointments = () => {
  const { t } = useTranslation();
  const params = useParams();

  const [appointmentsList, setAppointmentsList] = useState<IAppointment[]>([
    {
      id: v4(), patientFirstName: 'Pacjent', patientLastName: 'Nowak', date: '10.05.2022', startHour: '14:15', endHour: '14:30', avilable: true,
    },
    {
      id: v4(), patientFirstName: 'Nowy', patientLastName: 'Pacjent', date: '11.05.2022', startHour: '14:20', endHour: '14:40', avilable: true,
    },
    {
      id: v4(), patientFirstName: 'Pacjent', patientLastName: 'Nowak', date: '12.05.2022', startHour: '10:00', endHour: '10:20', avilable: false,
    }]);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const bookedVisitsResponse = await api.get('/bookedvisits');
        const bookedVisits = bookedVisitsResponse.data;
        const doctorBookedVisits = bookedVisits.filter((v) => v.doctorId === params.doctorId);
        console.log(bookedVisits);
        console.log(doctorBookedVisits);
      } catch (error) {
        console.log(error);
      }
    };

    getAppointments();
  }, []);

  return (
    <main style={{ padding: '1rem 0' }}>
      <h3>{ t('bookedAppointments') }</h3>
      <AppointmentsList appointmentsList={appointmentsList} />
    </main>
  );
}

export default AdminAppointments;
