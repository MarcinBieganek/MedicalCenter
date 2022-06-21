import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { Outlet, useParams } from 'react-router-dom';
import api from '../../services/backend';
import IDoctor from '../../types/IDoctor';

const Doctor = () => {
  const params = useParams();
  const [doctor, setDoctor] = useState<IDoctor>();
  const { t } = useTranslation();

  useEffect(() => {
    const getDoctor = async () => {
      try {
        const response = await api.get(`/doctor/${params.doctorPesel}`);
        setDoctor(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getDoctor();
  }, [params.doctorId]);

  return (
    <main style={{ padding: '1rem 0' }}>
      <h3>
        { t('doctor') }
        :
        {' '}
        {doctor?.firstName}
        {' '}
        {doctor?.lastName}
      </h3>
      <h4>
        { t('spec') }
        :
        {' '}
        {doctor?.spec}
      </h4>
      <Button variant="primary" href={`/doctors/${params.doctorPesel}/time`}>{ t('timeManagement') }</Button>
      {' '}
      |
      {' '}
      <Button variant="primary" href={`/doctors/${params.doctorPesel}/appointments`}>{ t('bookedAppointments') }</Button>
      <Outlet />
    </main>
  );
}

export default Doctor;
