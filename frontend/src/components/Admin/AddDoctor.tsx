import { useTranslation } from 'react-i18next';
import AddDoctorForm from './AddDoctorForm';

const AddDoctor = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{ t('doctorAdding') }</h2>
      <AddDoctorForm />
    </div>
  );
}

export default AddDoctor;
