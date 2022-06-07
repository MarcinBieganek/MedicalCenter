import React from 'react';
import Table from 'react-bootstrap/Table';
import IDoctorsDate from '../../types/IDoctorsDate';
import DoctorsDate from './DoctorsDate';

interface IDoctorsDatesListProps {
  doctorsDatesList: IDoctorsDate[];
}

const DoctorsDatesList = ({ doctorsDatesList } : IDoctorsDatesListProps) => (
  <div className="col-md-5">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Data</th>
          <th>Godzina od</th>
          <th>Godzina do</th>
          <th>Zmień</th>
          <th>Usuń</th>
        </tr>
      </thead>
      <tbody>
        {doctorsDatesList.map((date, index) => (
          <DoctorsDate doctorsDate={date} index={index} />
        ))}
      </tbody>
    </Table>
  </div>
)

export default DoctorsDatesList;
