import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/FormLabel';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import api, { ApiError } from '../../services/backend';
import validatePeselChecksum from '../../services/validation';

import IPatient from '../../types/IPatient';

const PatientRegisterForm = () => {
  const { t } = useTranslation();
  const [patientExists, setPatientExists] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IPatient>();
  const navigate = useNavigate();

  const onAdd: SubmitHandler<IPatient> = async (data) => {
    alert(JSON.stringify(data));
    try {
      const newPatient = {
        pesel: data.pesel,
        firstName: data.firstName,
        lastName: data.lastName,
      }

      const addPatientResponse = await api.post('/patientadd', newPatient);
      const addedPatient = addPatientResponse.data;
      navigate(`/patients/${addedPatient.pesel}`);
    } catch (error) {
      const err = error as ApiError;
      if (err.response?.status === 409) {
        setPatientExists(true);
      } else {
        // console.log(`Error: ${error}`);
      }
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
              <Form.Group className="mb-4" controlId="formPesel">
                <Form.Label>{ t('pesel') }</Form.Label>
                <Form.Control
                  type="name"
                  {...register('pesel', {
                    required: t('peselRequired'),
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: t('peselInWrongFormat'),
                    },
                    validate: {
                      validatePesel: (pesel) => validatePeselChecksum(pesel) || t('peselInWrongFormat'),
                    },
                  })}
                  placeholder={t('pesel')}
                />
                <FormLabel style={{ color: 'red' }}>{errors.pesel?.message}</FormLabel>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formName">
                <Form.Label>{ t('firstName') }</Form.Label>
                <Form.Control
                  type="name"
                  {...register('firstName', { required: t('firstNameRequired') })}
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
                    { required: t('lastNameRequired') },
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
