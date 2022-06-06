import React from 'react';
import { useTranslation } from 'react-i18next';
import IMeeting from '../../types/IMeeting';

interface IMeetingProps {
    meeting: IMeeting;
    index: number;
}

const Meeting = ({ meeting } : IMeetingProps) => {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '1rem 0' }}>
      <h4>
        {meeting.firstName}
        {' '}
        {meeting.lastName}
        {' '}
        {meeting.date}
        {' '}
        {meeting.startHour}
        {' '}
        -
        {' '}
        {meeting.endHour}
        {meeting.avilable
          ? <button type="submit">{ t('bookIt') }</button>
          : (
            <div style={{ display: 'inline-block' }}>
              {meeting.login === 'pacjent'
                    && <button type="submit">{ t('cancel') }</button>}
            </div>
          )}
      </h4>
    </main>
  );
}

export default Meeting;
