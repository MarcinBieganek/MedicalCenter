import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { Outlet, useParams } from 'react-router-dom';
import api from '../../services/backend';
import IDoctor from '../../types/IDoctor';
import Navbar from '../Navbar/Navbar';

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
        console.error(error);
      }
    };

    getDoctor();
  }, [params.doctorPesel]);

  return (
    <main>
      <Navbar />
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
