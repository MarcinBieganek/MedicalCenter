import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from 'react-i18next';
import api from '../../services/backend';
import IDoctor from '../../types/IDoctor';
import Navbar from '../Navbar/Navbar';

const Admin = () => {
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const response = await api.get('/doctor');
        setDoctors(response.data);
      } catch (error) {
        // console.log(error);
      }
    };

    getDoctors();
  }, []);

  return (
    <div>
      <Navbar />
      <main style={{ padding: '1rem 0' }}>
        <h2>{ t('admin') }</h2>
        <Button variant="primary" type="button" href="/adddoctor">{ t('addDoctor') }</Button>
        <h3>
          { t('doctors') }
          :
        </h3>

        <div className="row">
          <div className="col-md-3">
            <ListGroup defaultActiveKey="#link1">
              {doctors.map((doctor: IDoctor) => (
                <ListGroup.Item action href={`/doctors/${doctor.pesel}`} key={doctor.pesel}>
                  {doctor.firstName}
                  {' '}
                  {doctor.lastName}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Admin;
