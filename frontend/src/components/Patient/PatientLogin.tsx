import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
import PatientLoginForm from './PatientLoginForm';

const PatientLogin = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <h2>{ t('login') }</h2>
      <PatientLoginForm />
    </div>
  );
}

export default PatientLogin;
