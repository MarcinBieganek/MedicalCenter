import { debug } from 'util';
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

const PatientLoginForm = () => {
  const { t } = useTranslation();
  const [noPatient, setNoPatient] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IPatient>();
  const navigate = useNavigate();

  const onLogin: SubmitHandler<IPatient> = async (data) => {
    try {
      const patientResponse = await api.get(`/patient/${data.pesel}`);
      const patient = patientResponse.data;

      navigate(`/patients/${patient.pesel}`);
    } catch (error) {
      const err = error as ApiError;
      if (err.response?.status === 404) {
        setNoPatient(true);
      } else {
        debug(`Error: ${error}`);
      }
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
