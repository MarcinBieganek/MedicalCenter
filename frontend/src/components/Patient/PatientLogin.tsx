import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PatientLoginForm from './PatientLoginForm';

const PatientLogin = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{ t('login') }</h2>
      <PatientLoginForm />
      <Link to="/registerpatient">
        <button type="button">{ t('register') }</button>
      </Link>
    </div>
  );
}

export default PatientLogin;
