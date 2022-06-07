import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/FormLabel';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import api from '../../services/backend';
import IDoctor from '../../types/IDoctor';

const AddDoctorForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm<IDoctor>();
  const navigate = useNavigate();

  const onAdd: SubmitHandler<IDoctor> = async (data) => {
    alert(JSON.stringify(data));
    const newDoctor = {
      firstName: data.firstName,
      lastName: data.lastName,
      spec: data.spec,
    }
    try {
      const response = await api.post('/doctoradd', newDoctor);
      navigate('/admin');
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
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
            <Form.Group className="mb-4" controlId="formLastname">
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
            <Form.Group className="mb-4" controlId="formLastname">
              <Form.Label>{ t('spec') }</Form.Label>
              <Form.Control
                type="name"
                {...register('spec', { required: 'Specjalizacja jest wymagana' })}
                placeholder={t('spec')}
              />
              <FormLabel style={{ color: 'red' }}>{errors.spec?.message}</FormLabel>
            </Form.Group>
            <Button variant="primary" type="submit">{ t('addDoctor') }</Button>
          </Form>
        </div>
      </div>
    </main>
  );
}

export default AddDoctorForm;
