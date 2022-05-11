import IMeeting from "../../types/IMeeting";

interface IMeetingProps {
    meeting: IMeeting;
    index: Number;
}

const Meeting = ( { meeting } : IMeetingProps ) => {

    return (
        <main style={{ padding: "1rem 0" }}>
            <h4>
            {meeting.firstName} {meeting.lastName} {meeting.startHour} - {meeting.endHour}
            {meeting.avilable ?
                <button>zarezerwuj</button>
                :
                <div style={{display: "inline-block"}}>
                {meeting.login === 'pacjent' &&
                    <button>zrezygnuj</button>
                }
                </div>
            }
            </h4>
        </main>
  );
};

export default Meeting;