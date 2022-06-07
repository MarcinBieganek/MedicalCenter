import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import IMeeting from '../../types/IMeeting';

interface IMeetingProps {
    meeting: IMeeting;
    index: number;
}

const Meeting = ({ meeting } : IMeetingProps) => {
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
      {meeting.patientId === params.patientId
        ? <button type="submit">{ t('cancel') }</button>
        : <button type="submit">{ t('bookIt') }</button>}
    </div>
  );
}

export default Meeting;
