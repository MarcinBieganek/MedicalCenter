import { useTranslation } from 'react-i18next';
import PatientLoginForm from './PatientLoginForm';

const PatientLogin = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{ t('login') }</h2>
      <PatientLoginForm />
    </div>
  );
}

export default PatientLogin;
