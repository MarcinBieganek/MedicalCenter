import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
import PatientRegisterForm from './PatientRegisterForm';

const PatientRegister = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <h2>{ t('register') }</h2>
      <PatientRegisterForm />
    </div>
  );
}

export default PatientRegister;
