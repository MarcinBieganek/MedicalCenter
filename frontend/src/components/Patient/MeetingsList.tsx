import React from 'react';
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next';
import IMeeting from '../../types/IMeeting';
import Meeting from './Meeting';

interface IMeetingsListProps {
  meetingsList: IMeeting[];
  deleteItem: (meeting: IMeeting) => void;
}

const MeetingsList = ({ meetingsList, deleteItem } : IMeetingsListProps) => {
  const { t } = useTranslation();

  return (
    <div className="col-md-6">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>{ t('doctor first name') }</th>
            <th>{ t('doctor last name') }</th>
            <th>{ t('spec') }</th>
            <th>{ t('date') }</th>
            <th>{ t('hour from') }</th>
            <th>{ t('hour to') }</th>
            <th>{ t('book/cancel') }</th>
          </tr>
        </thead>
        <tbody>
          { meetingsList.map((meeting, index) => (
            <Meeting meeting={meeting} index={index} deleteItem={deleteItem} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MeetingsList;
