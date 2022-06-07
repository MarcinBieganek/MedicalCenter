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

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const bookedVisitsResponse = await api.get('/bookedvisits');
        const bookedVisits = bookedVisitsResponse.data;
        const doctorBookedVisits = bookedVisits.filter((v) => v.doctorId === params.doctorId);

        const patientsResponde = await api.get('/patients');
        const patients = patientsResponde.data;

        const appointments = doctorBookedVisits.map((visit) => {
          const visitPatient = patients.find((p) => p.id === visit.patientId);
          return {
            id: visit.id,
            patientFirstName: visitPatient.firstName,
            patientLastName: visitPatient.lastName,
            startHour: visit.startTime,
            endHour: visit.endTime,
            date: visit.day,
          }
        });

        setAppointmentsList(appointments);
      } catch (error) {
        console.log(error);
      }
    };

    getAppointments();
  }, [params.doctorId]);

  return (
    <main style={{ padding: '1rem 0' }}>
      <h3>{ t('bookedAppointments') }</h3>
      <AppointmentsList appointmentsList={appointmentsList} />
    </main>
  );
}

export default AdminAppointments;
