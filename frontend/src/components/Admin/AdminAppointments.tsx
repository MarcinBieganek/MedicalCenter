import React, { useState } from 'react';
import { v4 } from 'uuid';
import IMeeting from '../../types/IMeeting2';

export default function AdminAppointments() {
  const [meetingsList, setMeetingsList] = useState<IMeeting[]>([
    {id: v4(), firstName: 'Lekarz', lastName: 'Przykładowy', date: "10.05.2022", startHour: '14:15', endHour: '14:30', avilable: true, login: 'Pacjent1'},
    {id: v4(), firstName: 'Adam', lastName: 'Rodzinny', date: "11.05.2022",  startHour: '14:20', endHour: '14:40', avilable: true, login: 'Pacjent2'},
    {id: v4(), firstName: 'Adam', lastName: 'Rodzinny', date: "12.05.2022",  startHour: '10:00', endHour: '10:20', avilable: false, login: 'pacjent3'}]);

  return (
    <main style={{padding: '1rem 0'}}>
      <h2>Admin Umówione Wizyty</h2>
      <div>
        {meetingsList.map((m: IMeeting) => (
          <div>
            {m.date} {m.startHour} - {m.endHour} {m.login}
            <button>Odwołaj</button>
          </div>
        ))}
      </div>
    </main>
  );
}
