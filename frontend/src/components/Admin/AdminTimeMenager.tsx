import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import api from '../../services/backend';

import IDoctorsDate from '../../types/IDoctorsDate';
import DoctorsDatesList from './DoctorsDatesList';

const AdminTimeMenager = () => {
  const { t } = useTranslation();
  const params = useParams();

  const [doctorsDateList, setDoctorsDateList] = useState<IDoctorsDate[]>([]);

  const getDoctorsDates = async () => {
    try {
      const unbookedVisitsResponse = await api.get('/visits', { params: { isBooked: false, doctorPesel: params.doctorPesel } });
      const unbookedVisits = unbookedVisitsResponse.data;

      const doctorsDates = unbookedVisits.map((visit) => ({
        id: visit.id,
        startHour: visit.startTime,
        endHour: visit.endTime,
        date: visit.day,
      }));

      setDoctorsDateList(doctorsDates);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDoctorsDate = async (doctorsDate: IDoctorsDate) => {
    try {
      await api.delete(`/visitdelete/${doctorsDate.id}`);

      getDoctorsDates();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDoctorsDates();
  }, [params.doctorPesel]);

  return (
    <main style={{ padding: '1rem 0' }}>
      <h3>{ t('timeManagement') }</h3>
      <Button variant="primary" type="submit" href={`/doctors/${params.doctorPesel}/addappointment`}>{ t('add') }</Button>
      <DoctorsDatesList doctorsDatesList={doctorsDateList} deleteItem={deleteDoctorsDate} />
    </main>
  );
}

export default AdminTimeMenager;
