import { useTranslation } from 'react-i18next';
import PatientRegisterForm from './PatientRegisterForm';

const PatientRegister = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{ t('register') }</h2>
      <PatientRegisterForm />
    </div>
  );
}

export default PatientRegister;
