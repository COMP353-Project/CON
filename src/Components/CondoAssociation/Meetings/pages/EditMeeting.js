import React from 'react';
import { useParams } from 'react-router-dom';
import MeetingForm from '../components/MeetingForm';

const EditMeeting = () => {
  const { id } = useParams();

  return <MeetingForm isEdit id={id} />;
};

export default EditMeeting;