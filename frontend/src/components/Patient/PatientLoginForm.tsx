import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/FormLabel';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import api from '../../services/backend';

import IPatient from '../../types/IPatient';

const PatientLoginForm = () => {
  const { t } = useTranslation();
  const [noPatient, setNoPatient] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IPatient>();
  const navigate = useNavigate();

  const onLogin: SubmitHandler<IPatient> = async (data) => {
    alert(JSON.stringify(data));
    try {
      const patientsResponse = await api.get('/patients');
      const patients = patientsResponse.data;

      const findPatient = patients.find(
        (p: IPatient) => p.firstName === data.firstName && p.lastName === data.lastName,
      );

      if (findPatient) {
        navigate(`/patients/${findPatient.id}`);
      } else {
        setNoPatient(true);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <>
      {noPatient && (
      <p style={{ color: 'red' }}>
        { t('noPatient') }
        !
      </p>
      )}
      <main role="main" className="containter">
        <div className="row">
          <div className="col-md-3">
            <Form onSubmit={handleSubmit(onLogin)}>
              <Form.Group className="mb-4" controlId="formName">
                <Form.Label>{ t('firstName') }</Form.Label>
                <Form.Control
                  type="name"
                  {...register('firstName', { required: t('firstNameRequired') })}
                  placeholder={t('firstName')}
                />
                <FormLabel style={{ color: 'red' }}>{errors.firstName?.message}</FormLabel>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formLastname">
                <Form.Label>{ t('lastName') }</Form.Label>
                <Form.Control
                  type="name"
                  {...register(
                    'lastName',
                    { required: t('lastNameRequired') },
                  )}
                  placeholder={t('lastName')}
                />
                <FormLabel style={{ color: 'red' }}>{errors.lastName?.message}</FormLabel>
              </Form.Group>
              <Button variant="primary" type="submit">{ t('login') }</Button>
              {' '}
              <Button variant="primary" type="button" href="/registerpatient">{ t('register') }</Button>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
}

export default PatientLoginForm;
