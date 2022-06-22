import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/FormLabel';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import api, { ApiError } from '../../services/backend';
import validatePeselChecksum from '../../services/validation';
import IDoctor from '../../types/IDoctor';

const AddDoctorForm = () => {
  const { t } = useTranslation();
  const [doctorExists, setDoctorExists] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IDoctor>();
  const navigate = useNavigate();

  const onAdd: SubmitHandler<IDoctor> = async (data) => {
    alert(JSON.stringify(data));
    try {
      const newDoctor = {
        pesel: data.pesel,
        firstName: data.firstName,
        lastName: data.lastName,
        spec: data.spec,
      }

      await api.post('/doctor', newDoctor);
      navigate('/admin');
    } catch (error) {
      const err = error as ApiError;
      if (err.response?.status === 409) {
        setDoctorExists(true);
      } else {
        // console.log(`Error: ${error}`);
      }
    }
  };

  return (
    <>
      {doctorExists && (
        <p style={{ color: 'red' }}>
          { t('doctorExists') }
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
              <Form.Group className="mb-4" controlId="formLastname">
                <Form.Label>{ t('spec') }</Form.Label>
                <Form.Control
                  type="name"
                  {...register('spec', { required: t('specRequired') })}
                  placeholder={t('spec')}
                />
                <FormLabel style={{ color: 'red' }}>{errors.spec?.message}</FormLabel>
              </Form.Group>
              <Button variant="primary" type="submit">{ t('addDoctor') }</Button>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
}

export default AddDoctorForm;
