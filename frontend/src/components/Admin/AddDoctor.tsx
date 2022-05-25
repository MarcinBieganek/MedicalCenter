import React from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import AddDoctorForm from './AddDoctorForm';


export default function AddDoctor() {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <h2>{ t('doctorAdding') }</h2>
            <AddDoctorForm />
        </div>
    );
}
