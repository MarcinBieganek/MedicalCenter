import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';
import IMeeting from '../../types/IMeeting';

const AdminAppointments = () => {
  const { t } = useTranslation();

  const [meetingsList] = useState<IMeeting[]>([
    {
      id: v4(), firstName: 'Lekarz', lastName: 'Przykładowy', date: '10.05.2022', startHour: '14:15', endHour: '14:30', avilable: true, login: 'Pacjent1',
    },
    {
      id: v4(), firstName: 'Adam', lastName: 'Rodzinny', date: '11.05.2022', startHour: '14:20', endHour: '14:40', avilable: true, login: 'Pacjent2',
    },
    {
      id: v4(), firstName: 'Adam', lastName: 'Rodzinny', date: '12.05.2022', startHour: '10:00', endHour: '10:20', avilable: false, login: 'pacjent3',
    }]);

  return (
    <main style={{ padding: '1rem 0' }}>
      <h3>{ t('bookedAppointments') }</h3>
      <div>
        {meetingsList.map((m: IMeeting) => (
          <div>
            {m.date}
            {' '}
            {m.startHour}
            {' '}
            -
            {' '}
            {m.endHour}
            {' '}
            {m.login}
            <button type="submit">{ t('cancel') }</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default AdminAppointments;
