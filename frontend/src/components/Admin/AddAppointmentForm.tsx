import { debug } from 'util';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/FormLabel';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/backend';
import IDoctorsDate from '../../types/IDoctorsDate';

const AddAppointmentForm = () => {
  const { t } = useTranslation();
  const params = useParams();
  const {
    register, handleSubmit, getValues, formState: { errors },
  } = useForm<IDoctorsDate>();
  const navigate = useNavigate();

  const onAdd: SubmitHandler<IDoctorsDate> = async (data) => {
    const newAppointment = {
      startDate: data.startHour,
      endDate: data.endHour,
      day: data.date,
      isBooked: false,
      doctorPesel: params.doctorPesel,
    }
    try {
      await api.post('/visit', newAppointment);
      navigate('/admin');
    } catch (error) {
      debug(`Error: ${error}`);
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
                type="date"
                {...register('date', { required: t('dateRequired'), min: { value: Date(), message: t("You can't choose past date") } })}
                placeholder={t('date')}
              />
              <FormLabel style={{ color: 'red' }}>{errors.date?.message}</FormLabel>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formLastname">
              <Form.Label>{ t('hour from') }</Form.Label>
              <Form.Control
                type="time"
                {...register(
                  'startHour',
                  { required: t('hourRequired') },
                )}
                placeholder={t('hour from')}
              />
              <FormLabel style={{ color: 'red' }}>{errors.startHour?.message}</FormLabel>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formLastname">
              <Form.Label>{ t('hour to') }</Form.Label>
              <Form.Control
                type="time"
                {...register('endHour', { required: t('hourRequired'), validate: { correctHours: (endHour) => endHour > getValues().startHour || t('End hour must be after start hour') } })}
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
