import IMeeting from "../../types/IMeeting";
import Meeting from "./Meeting";

interface IMeetingsListProps {
    meetingsList: IMeeting[];
}

const MeetingsList = ( { meetingsList } : IMeetingsListProps ) => {

    return (
        <div>
            {meetingsList.map((meeting, index) => (
                <Meeting meeting={meeting} index={index} />
            ))}
        </div>
  );
};

export default MeetingsList;