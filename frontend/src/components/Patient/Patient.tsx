import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import api from '../../services/backend';

import IMeeting from '../../types/IMeeting';
import IPatient from '../../types/IPatient';
import MeetingsList from './MeetingsList';

const Patient = () => {
  const { t } = useTranslation();
  const params = useParams();

  const [patient, setPatient] = useState<IPatient>();
  const [patientMeetingsList, setPatientMeetingsList] = useState<IMeeting[]>([]);
  const [availableMeetingsList, setAvailableMeetingsList] = useState<IMeeting[]>([]);

  useEffect(() => {
    const getPatient = async () => {
      try {
        const response = await api.get(`/patient/${params.patientId}`);
        setPatient(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getPatientVisits = async () => {
      try {
        const bookedVisitsResponse = await api.get('/bookedvisits');
        const bookedVisits = bookedVisitsResponse.data;
        const patientBookedVisits = bookedVisits.filter((v) => v.patientId === params.patientId);

        const doctorsResponse = await api.get('/doctors');
        const doctors = doctorsResponse.data;

        const patientVisits = patientBookedVisits.map((visit) => {
          const visitDoctor = doctors.find((d) => d.id === visit.doctorId);
          return {
            id: visit.id,
            doctorFirstName: visitDoctor.firstName,
            doctorLastName: visitDoctor.lastName,
            doctorSpec: visitDoctor.spec,
            startHour: visit.startTime,
            endHour: visit.endTime,
            date: visit.day,
            patientId: visit.patientId,
          }
        });

        setPatientMeetingsList(patientVisits);
      } catch (error) {
        console.log(error);
      }
    };

    const getUnbookedVisits = async () => {
      try {
        const unbookedVisitsResponse = await api.get('/unbookedvisits');
        const unbookedVisits = unbookedVisitsResponse.data;

        const doctorsResponse = await api.get('/doctors');
        const doctors = doctorsResponse.data;

        const availableMeetings = unbookedVisits.map((visit) => {
          const visitDoctor = doctors.find((d) => d.id === visit.doctorId);
          return {
            id: visit.id,
            doctorFirstName: visitDoctor.firstName,
            doctorLastName: visitDoctor.lastName,
            doctorSpec: visitDoctor.spec,
            startHour: visit.startTime,
            endHour: visit.endTime,
            date: visit.day,
            patientId: visit.patientId,
          }
        });

        setAvailableMeetingsList(availableMeetings);
      } catch (error) {
        console.log(error);
      }
    };

    getPatient();
    getPatientVisits();
    getUnbookedVisits();
  }, [params.patientId]);

  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>
        { t('hey') }
        { ', ' }
        { patient?.firstName }
        { ' ' }
        { patient?.lastName }
      </h2>
      <hr />
      <h3>
        {t('yourAppointments')}
        :
      </h3>
      <MeetingsList meetingsList={patientMeetingsList} />
      <hr />
      <h3>
        {t('availableAppointments')}
        :
      </h3>
      <MeetingsList meetingsList={availableMeetingsList} />
    </main>
  );
}

export default Patient;
