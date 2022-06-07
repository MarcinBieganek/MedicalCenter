import React from 'react';
import Table from 'react-bootstrap/Table';
import IMeeting from '../../types/IMeeting';
import Meeting from './Meeting';

interface IMeetingsListProps {
    meetingsList: IMeeting[];
    deleteItem: (meeting: IMeeting) => void;
}

const MeetingsList = ({ meetingsList, deleteItem } : IMeetingsListProps) => (
  <div className="col-md-6">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Imię lekarza</th>
          <th>Nazwisko lekarza</th>
          <th>Specjalizacja</th>
          <th>Data</th>
          <th>Godzina od</th>
          <th>Godzina do</th>
          <th>Zarezerwuj/Odwołaj</th>
        </tr>
      </thead>
      <tbody>
        { meetingsList.map((meeting, index) => (
          <Meeting meeting={meeting} index={index} deleteItem={deleteItem} />
        ))}
      </tbody>
    </Table>
  </div>
)

export default MeetingsList;
