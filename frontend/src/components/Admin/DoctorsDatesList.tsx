import React from 'react';
import IDoctorsDate from '../../types/IDoctorsDate';
import DoctorsDate from './DoctorsDate';

interface IDoctorsDatesListProps {
  doctorsDatesList: IDoctorsDate[];
}

const DoctorsDatesList = ({ doctorsDatesList } : IDoctorsDatesListProps) => (
  <div>
    {doctorsDatesList.map((date, index) => (
      <DoctorsDate doctorsDate={date} index={index} />
    ))}
  </div>
)

export default DoctorsDatesList;
