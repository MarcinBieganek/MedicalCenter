import React from 'react';
import IMeeting from '../../types/IMeeting';
import Meeting from './Meeting';

interface IMeetingsListProps {
    meetingsList: IMeeting[];
    deleteItem: (meeting: IMeeting) => void;
}

const MeetingsList = ({ meetingsList, deleteItem } : IMeetingsListProps) => (
  <div>
    { meetingsList.map((meeting, index) => (
      <Meeting meeting={meeting} index={index} deleteItem={deleteItem} />
    ))}
  </div>
)

export default MeetingsList;
