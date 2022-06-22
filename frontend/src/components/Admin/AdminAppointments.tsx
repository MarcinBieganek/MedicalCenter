import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import api from '../../services/backend';
import IAppointment from '../../types/IAppointment';
import AppointmentsList from './AppointmentsList';

const AdminAppointments = () => {
  const { t } = useTranslation();
  const params = useParams();

  const [appointmentsList, setAppointmentsList] = useState<IAppointment[]>([]);

  const getAppointments = async () => {
    try {
      const bookedVisitsResponse = await api.get('/visits', { params: { isBooked: true, doctorPesel: params.doctorPesel } });
      const bookedVisits = bookedVisitsResponse.data;

      const appointments = await Promise.all(bookedVisits.map(async (visit) => {
        const patientResponse = await api.get(`/patient/${visit.patientPesel}`);
        const visitPatient = patientResponse.data;
        return {
          id: visit.id,
          patientFirstName: visitPatient.firstName,
          patientLastName: visitPatient.lastName,
          startHour: visit.startDate,
          endHour: visit.endDate,
          date: visit.day,
        }
      }));

      setAppointmentsList(appointments);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelAppointment = async (appointment: IAppointment) => {
    try {
      await api.put('/visitunbook', null, { params: { visitId: appointment.id } });

      getAppointments();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAppointments();
  }, [params.doctorPesel]);

  return (
    <main style={{ padding: '1rem 0' }}>
      <h3>{ t('bookedAppointments') }</h3>
      <AppointmentsList appointmentsList={appointmentsList} deleteItem={cancelAppointment} />
    </main>
  );
}

export default AdminAppointments;
