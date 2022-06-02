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
      id: 44,
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
    <form onSubmit={handleSubmit(onAdd)}>
      <div>
        <legend>{ t('firstName') }</legend>
        <input {...register('firstName', { required: 'Imie jest wymagane' })} placeholder={t('firstName')} />
        <p style={{ color: 'red' }}>{errors.firstName?.message}</p>
      </div>
      <div>
        <legend>{ t('lastName') }</legend>
        <input {...register('lastName', { required: 'Nazwisko jest wymagane' })} placeholder={t('lastName')} />
        <p style={{ color: 'red' }}>{errors.lastName?.message}</p>
      </div>
      <div>
        <legend>{ t('spec') }</legend>
        <input {...register('spec', { required: 'Specjalizacja jest wymagana' })} placeholder={t('spec')} />
        <p style={{ color: 'red' }}>{errors.spec?.message}</p>
      </div>
      <button type="submit">{ t('addDoctor') }</button>
    </form>
  );
}

export default AddDoctorForm;
