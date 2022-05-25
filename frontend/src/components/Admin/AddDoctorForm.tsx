import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IDoctor from '../../types/IDoctor';
import api from '../../services/backend';

export default function AddDoctorForm() {
    const { t, i18n } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm<IDoctor>();
    let navigate = useNavigate();

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
                <label>{ t('firstName') }</label>
                <input {...register('firstName', {required: 'Imie jest wymagane'})} placeholder={ t('firstName') } />
                <p style={{color: 'red'}}>{errors.firstName?.message}</p>
            </div>
            <div>
                <label>{ t('lastName') }</label>
                <input {...register('lastName', {required: 'Nazwisko jest wymagane'})} placeholder={ t('lastName') } />
                <p style={{color: 'red'}}>{errors.lastName?.message}</p>
            </div>
            <div>
                <label>{ t('spec') }</label>
                <input {...register('spec', {required: 'Specjalizacja jest wymagana'})} placeholder={ t('spec') } />
                <p style={{color: 'red'}}>{errors.spec?.message}</p>
            </div>
            <button type='submit'>{ t('addDoctor') }</button>
        </form>
    );
}
