import { debug } from 'util';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import api from '../../services/backend';
import IMeeting from '../../types/IMeeting';
import IPatient from '../../types/IPatient';
import Navbar from '../Navbar/Navbar';
import MeetingsList from './MeetingsList';

const Patient = () => {
  const { t } = useTranslation();
  const params = useParams();

  const [patient, setPatient] = useState<IPatient>();
  const [patientMeetingsList, setPatientMeetingsList] = useState<IMeeting[]>([]);
  const [availableMeetingsList, setAvailableMeetingsList] = useState<IMeeting[]>([]);

  const getPatient = async () => {
    try {
      const response = await api.get(`/patient/${params.patientPesel}`);
      setPatient(response.data);
    } catch (error) {
      debug(error);
    }
  };

  const getPatientVisits = async () => {
    try {
      const patientBookedVisitsResponse = await api.get('/visit', { params: { patientPesel: params.patientPesel } });
      const patientBookedVisits = patientBookedVisitsResponse.data;

      const patientVisits = await Promise.all(patientBookedVisits.map(async (visit) => {
        const getDoctorResponse = await api.get(`/doctor/${visit.doctorPesel}`);
        const visitDoctor = getDoctorResponse.data;
        return {
          id: visit.id,
          doctorFirstName: visitDoctor.firstName,
          doctorLastName: visitDoctor.lastName,
          doctorSpec: visitDoctor.spec,
          startHour: visit.startDate,
          endHour: visit.endDate,
          date: visit.day,
          patientPesel: visit.patientPesel,
        }
      }));

      setPatientMeetingsList(patientVisits);
    } catch (error) {
      debug(error);
    }
  };

  const getUnbookedVisits = async () => {
    try {
      const unbookedVisitsResponse = await api.get('/visit', { params: { isBooked: false } });
      const unbookedVisits = unbookedVisitsResponse.data;

      const availableMeetings = await Promise.all(unbookedVisits.map(async (visit) => {
        const getDoctorResponse = await api.get(`/doctor/${visit.doctorPesel}`);
        const visitDoctor = getDoctorResponse.data;
        return {
          id: visit.id,
          doctorFirstName: visitDoctor.firstName,
          doctorLastName: visitDoctor.lastName,
          doctorSpec: visitDoctor.spec,
          startHour: visit.startDate,
          endHour: visit.endDate,
          date: visit.day,
          patientPesel: visit.patientPesel,
        }
      }));

      setAvailableMeetingsList(availableMeetings);
    } catch (error) {
      debug(error);
    }
  };

  const cancelMeeting = async (meeting: IMeeting) => {
    try {
      await api.put('/visit/unbook', null, { params: { visitId: meeting.id } });

      getPatientVisits();
      getUnbookedVisits();
    } catch (error) {
      debug(error);
    }
  }

  const bookMeeting = async (meeting: IMeeting) => {
    try {
      await api.put('/visit/book', null, { params: { visitId: meeting.id, patientPesel: params.patientPesel } });

      getPatientVisits();
      getUnbookedVisits();
    } catch (error) {
      debug(error);
    }
  }

  useEffect(() => {
    getPatient();
    getPatientVisits();
    getUnbookedVisits();
  }, [params.patientPesel]);

  return (
    <div>
      <Navbar />
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
          { t('yourAppointments') }
          :
        </h3>
        <MeetingsList meetingsList={patientMeetingsList} deleteItem={cancelMeeting} />
        <hr />
        <h3>
          { t('availableAppointments') }
          :
        </h3>
        <MeetingsList meetingsList={availableMeetingsList} deleteItem={bookMeeting} />
      </main>
    </div>
  );
}

export default Patient;
