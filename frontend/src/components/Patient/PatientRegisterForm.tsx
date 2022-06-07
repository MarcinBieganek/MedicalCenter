import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/FormLabel';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import api from '../../services/backend';

import IPatient from '../../types/IPatient';

const PatientRegisterForm = () => {
  const { t } = useTranslation();
  const [patientExists, setPatientExists] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IPatient>();
  const navigate = useNavigate();

  const onAdd: SubmitHandler<IPatient> = async (data) => {
    alert(JSON.stringify(data));
    try {
      const patientsResponse = await api.get('/patients');
      const patients = patientsResponse.data;

      console.log(patients);

      const findPatient = patients.find(
        (p: IPatient) => p.firstName === data.firstName && p.lastName === data.lastName,
      );

      if (findPatient) {
        setPatientExists(true);
      } else {
        const newPatient = {
          firstName: data.firstName,
          lastName: data.lastName,
        }

        const addPatientResponse = await api.post('/patientadd', newPatient);
        const addedPatient = addPatientResponse.data;
        navigate(`/patients/${addedPatient.id}`);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <>
      {patientExists && (
      <p style={{ color: 'red' }}>
        { t('patientExists') }
        !
      </p>
      )}
      <main role="main" className="containter">
        <div className="row">
          <div className="col-md-3">
            <Form onSubmit={handleSubmit(onAdd)}>
              <Form.Group className="mb-4" controlId="formName">
                <Form.Label>{ t('firstName') }</Form.Label>
                <Form.Control
                  type="name"
                  {...register('firstName', { required: 'Imie jest wymagane' })}
                  placeholder={t('firstName')}
                />
                <FormLabel style={{ color: 'red' }}>{errors.firstName?.message}</FormLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastname">
                <Form.Label>{ t('lastName') }</Form.Label>
                <Form.Control
                  type="name"
                  {...register(
                    'lastName',
                    { required: 'Nazwisko jest wymagane' },
                  )}
                  placeholder={t('lastName')}
                />
                <FormLabel style={{ color: 'red' }}>{errors.lastName?.message}</FormLabel>
              </Form.Group>
              <Button variant="primary" type="submit">{ t('register') }</Button>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
}

export default PatientRegisterForm;
