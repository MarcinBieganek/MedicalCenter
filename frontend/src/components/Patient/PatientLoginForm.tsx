import React, { useState } from 'react';
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
      <form onSubmit={handleSubmit(onLogin)}>
        <div>
          <legend>{ t('firstName') }</legend>
          <input {...register('firstName', { required: 'Imie jest wymagane' })} placeholder={t('firstName')} />
          <p style={{ color: 'red' }}>{errors.firstName?.message}</p>
        </div>
        <div>
          <legend>{ t('lastName') }</legend>
          <input {...register('lastName', { required: 'Nazwisko jest wymagane' })} placeholder={t('lastName')} />
          <p style={{ color: 'red' }}>{errors.lastName?.message}</p>
        </div>
        <button type="submit">{ t('login') }</button>
      </form>
    </>
  );
}

export default PatientLoginForm;
