import { useTranslation } from 'react-i18next';
import AddAppointmentForm from './AddAppointmentForm';

const AddAppointment = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{ t('AppointmentAdding') }</h2>
      <AddAppointmentForm />
    </div>
  );
}

export default AddAppointment;
