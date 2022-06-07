import React from 'react';
import { useTranslation } from 'react-i18next';
import IDoctorsDate from '../../types/IDoctorsDate';

interface IDoctorsDateProps {
    doctorsDate: IDoctorsDate;
    index: number;
}

const DoctorsDate = ({ doctorsDate } : IDoctorsDateProps) => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '1rem 0' }}>
      {doctorsDate.date}
      {' '}
      {doctorsDate.startHour}
      {' '}
      -
      {' '}
      {doctorsDate.endHour}
      {' '}
      <button type="submit">{ t('edit') }</button>
      {' '}
      <button type="submit">{ t('delete') }</button>
    </div>
  );
}

export default DoctorsDate;
