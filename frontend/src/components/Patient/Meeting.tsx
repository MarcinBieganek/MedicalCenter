import { useTranslation } from 'react-i18next';
import IMeeting from '../../types/IMeeting';

interface IMeetingProps {
    meeting: IMeeting;
    index: Number;
}

const Meeting = ( {meeting} : IMeetingProps ) => {
  const { t, i18n } = useTranslation();

  return (
    <main style={{padding: '1rem 0'}}>
      <h4>
        {meeting.firstName} {meeting.lastName} {meeting.startHour} - {meeting.endHour}
        {meeting.avilable ?
                <button>{ t('bookIt') }</button> :
                <div style={{display: 'inline-block'}}>
                  {meeting.login === 'pacjent' &&
                    <button>{ t('cancel') }</button>
                  }
                </div>
        }
      </h4>
    </main>
  );
};

export default Meeting;
