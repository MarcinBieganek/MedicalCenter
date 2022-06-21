import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/FormLabel';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import api from '../../services/backend';
import IDoctorsDate from '../../types/IDoctorsDate';

const AddAppointmentForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm<IDoctorsDate>();
  const navigate = useNavigate();

  const onAdd: SubmitHandler<IDoctorsDate> = async (data) => {
    alert(JSON.stringify(data));
    const newAppointment = {
      startHour: data.startHour,
      endHour: data.endHour,
      date: data.date,
      pesel: data.pesel,
    }
    try {
      await api.post('/visitadd', newAppointment);
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
              <Form.Label>{ t('date') }</Form.Label>
              <Form.Control
                type="name"
                {...register('date', { required: t('firstNameRequired') })}
                placeholder={t('date')}
              />
              <FormLabel style={{ color: 'red' }}>{errors.date?.message}</FormLabel>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formLastname">
              <Form.Label>{ t('hour from') }</Form.Label>
              <Form.Control
                type="name"
                {...register(
                  'startHour',
                  { required: t('hour from') },
                )}
                placeholder={t('hour from')}
              />
              <FormLabel style={{ color: 'red' }}>{errors.startHour?.message}</FormLabel>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formLastname">
              <Form.Label>{ t('hour to') }</Form.Label>
              <Form.Control
                type="name"
                {...register('endHour', { required: t('specRequired') })}
                placeholder={t('hour to')}
              />
              <FormLabel style={{ color: 'red' }}>{errors.endHour?.message}</FormLabel>
            </Form.Group>
            <Button variant="primary" type="submit">{ t('AddAppointment') }</Button>
          </Form>
        </div>
      </div>
    </main>
  );
}

export default AddAppointmentForm;
