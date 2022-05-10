import IMeeting from "../../types/IMeeting";

interface IMeetingProps {
    meeting: IMeeting;
    index: Number;
}

const Meeting = ( { meeting } : IMeetingProps ) => {

    return (
        <main style={{ padding: "1rem 0" }}>
            <div>{meeting.firstName} {meeting.lastName} {meeting.startHour} {meeting.endHour}</div>
            {meeting.avilable ?
                <div onClick={() => {meeting.avilable = false}}>ZAREZERWUJ</div>
                :
                <div>
                {meeting.login === 'pacjent' &&
                    <div onClick={() => {meeting.avilable = false}}>ZREZYGNUJ</div>
                }
                </div>
            }
        </main>
  );
};

export default Meeting;