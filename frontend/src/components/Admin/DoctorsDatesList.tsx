import React from 'react';
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next';
import IDoctorsDate from '../../types/IDoctorsDate';
import DoctorsDate from './DoctorsDate';

interface IDoctorsDatesListProps {
  doctorsDatesList: IDoctorsDate[];
  deleteItem: (doctorsDate: IDoctorsDate) => void;
}

const DoctorsDatesList = ({ doctorsDatesList, deleteItem } : IDoctorsDatesListProps) => {
  const { t } = useTranslation();

  return (
    <div className="col-md-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>{ t('date') }</th>
            <th>{ t('hour from') }</th>
            <th>{ t('hour to') }</th>
            <th>{ t('edit') }</th>
            <th>{ t('delete') }</th>
          </tr>
        </thead>
        <tbody>
          {doctorsDatesList.map((date, index) => (
            <DoctorsDate doctorsDate={date} index={index} deleteItem={deleteItem} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DoctorsDatesList;
