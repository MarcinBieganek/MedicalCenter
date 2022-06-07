import React from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import IMeeting from '../../types/IMeeting';

interface IMeetingProps {
    meeting: IMeeting;
    index: number;
    deleteItem: (meeting: IMeeting) => void;
}

const Meeting = ({ meeting, deleteItem } : IMeetingProps) => {
  const { t } = useTranslation();
  const params = useParams();

  return (
    <tr>
      <td>{meeting.doctorFirstName}</td>
      <td>{meeting.doctorLastName}</td>
      <td>{meeting.doctorSpec}</td>
      <td>{meeting.date}</td>
      <td>{meeting.startHour}</td>
      <td>{meeting.endHour}</td>
      <td>
        <Button variant="primary" type="button" onClick={() => deleteItem(meeting)}>
          {meeting.patientId === params.patientId
            ? t('cancel')
            : t('bookIt') }
        </Button>
      </td>
    </tr>
  );
}

export default Meeting;
