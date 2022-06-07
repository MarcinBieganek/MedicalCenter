import React from 'react';
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
    <div style={{ padding: '1rem 0' }}>
      {meeting.doctorFirstName}
      {' '}
      {meeting.doctorLastName}
      {' '}
      {meeting.doctorSpec}
      {' '}
      {meeting.date}
      {' '}
      {meeting.startHour}
      {' '}
      -
      {' '}
      {meeting.endHour}
      {' '}
      <button type="button" onClick={() => deleteItem(meeting)}>
        {meeting.patientId === params.patientId
          ? t('cancel')
          : t('bookIt') }
      </button>
    </div>
  );
}

export default Meeting;
