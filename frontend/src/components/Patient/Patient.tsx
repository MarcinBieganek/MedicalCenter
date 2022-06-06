import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';
import IMeeting from '../../types/IMeeting';
import MeetingsList from './MeetingsList';

const Patient = () => {
  const { t, i18n } = useTranslation();

  const [login, setLogin] = useState<string>('pacjent');

  const [meetingsList, setMeetingsList] = useState<IMeeting[]>([
    {
      id: v4(), firstName: 'Lekarz', lastName: 'Przykładowy', startHour: '14:15', endHour: '14:30', date: '10.05.2022', avilable: true, login: '',
    },
    {
      id: v4(), firstName: 'Adam', lastName: 'Rodzinny', startHour: '14:20', endHour: '14:40', date: '14.05.2022', avilable: true, login: '',
    },
    {
      id: v4(), firstName: 'Adam', lastName: 'Rodzinny', startHour: '10:00', endHour: '10:20', date: '20.05.2022', avilable: false, login: 'pacjent',
    }]);

  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>
        {t('yourAppointments')}
        :
      </h2>
      <MeetingsList meetingsList={meetingsList.filter((element) => !element.avilable
        && element.login === login)}
      />
      <h2>
        {t('availableAppointments')}
        :
      </h2>
      <MeetingsList meetingsList={meetingsList.filter((element) => element.avilable)} />
    </main>
  );
}

export default Patient;
