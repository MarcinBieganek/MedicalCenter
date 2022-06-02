import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import api from '../../services/backend';
import IDoctor from '../../types/IDoctor';

const Admin = () => {
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const response = await api.get('/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getDoctors();
  }, []);

  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>{ t('admin') }</h2>
      <Link to="/adddoctor">{ t('addDoctor') }</Link>
      <h3>
        { t('doctors') }
        :
      </h3>
      <nav>
        {doctors.map((doctor: IDoctor) => (
          <Link
            style={{ display: 'block', margin: '1rem 0' }}
            to={`/doctors/${doctor.id}`}
            key={doctor.id}
          >
            {doctor.firstName}
            {' '}
            {doctor.lastName}
          </Link>
        ))}
      </nav>
    </main>
  );
}
export default Admin;
