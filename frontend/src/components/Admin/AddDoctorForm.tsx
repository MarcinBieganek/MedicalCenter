import React from 'react';
import ReactDOM from 'react-dom';
import {useForm, SubmitHandler} from 'react-hook-form';
import IDoctor from '../../types/IDoctor';

export default function AddDoctorForm() {
  const {register, handleSubmit, formState: {errors}} = useForm<IDoctor>();

  const onAdd: SubmitHandler<IDoctor> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onAdd)}>
      <div>
        <label>Imię</label>
        <input {...register('firstName', {required: 'Imie jest wymagane'})} placeholder="Imie" />
        <p style={{color: 'red'}}>{errors.firstName?.message}</p>
      </div>
      <div>
        <label>Nazwisko</label>
        <input {...register('lastName', {required: 'Nazwisko jest wymagane'})} placeholder="Nazwisko" />
        <p style={{color: 'red'}}>{errors.lastName?.message}</p>
      </div>
      <div>
        <label>Specjalizacja</label>
        <input {...register('spec', {required: 'Specjalizacja jest wymagana'})} placeholder="Specjalizacja" />
        <p style={{color: 'red'}}>{errors.spec?.message}</p>
      </div>
      <button>Dodaj lekarza</button>
    </form>
  );
}
