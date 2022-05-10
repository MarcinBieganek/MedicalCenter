import { useState } from "react";
import { v4 } from "uuid"
import IMeeting from "../../types/IMeeting";
import MeetingsList from "./MeetingsList";


const Patient = () => {

  const [login, setLogin] = useState<string>('pacjent');

  const [meetingsList, setMeetingsList] = useState<IMeeting[]>([
    { id: v4(), firstName: "Lekarz", lastName: "Przykładowy", startHour: "14:15", endHour: "14:30", avilable: true, login: ''},
    { id: v4(), firstName: "Adam", lastName: "Rodzinny", startHour: "14:20", endHour: "14:40", avilable: true, login: ''},
    { id: v4(), firstName: "Adam", lastName: "Rodzinny", startHour: "10:00", endHour: "10:20", avilable: false, login: 'pacjent'}]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Twoje wizyty:</h2>
      <MeetingsList meetingsList={meetingsList.filter((element) => !element.avilable && element.login === login)} />
      <h2>Dostepne wizyty:</h2>
      <MeetingsList meetingsList={meetingsList.filter((element) => element.avilable)} />
    </main>
  );
};

export default Patient;