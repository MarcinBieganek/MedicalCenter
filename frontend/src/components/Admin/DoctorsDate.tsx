import React from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import IDoctorsDate from '../../types/IDoctorsDate';

interface IDoctorsDateProps {
  doctorsDate: IDoctorsDate;
  index: number;
  deleteItem: (doctorsDate: IDoctorsDate) => void;
}

const DoctorsDate = ({ doctorsDate, deleteItem } : IDoctorsDateProps) => {
  const { t } = useTranslation();

  return (
    <tr>
      <td>{doctorsDate.date}</td>
      <td>{doctorsDate.startHour}</td>
      <td>{doctorsDate.endHour}</td>
      <td>
        <Button variant="primary" type="button" onClick={() => deleteItem(doctorsDate)}>{ t('delete') }</Button>
      </td>
    </tr>
  );
}

export default DoctorsDate;
