import React, { useState } from 'react';
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
      <form onSubmit={handleSubmit(onAdd)}>
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
        <button type="submit">{ t('register') }</button>
      </form>
    </>
  );
}

export default PatientRegisterForm;
