import React from 'react';
import DiscussionForm from '../components/DiscussionForm';
import { useParams } from 'react-router-dom';

const EditDiscussion = () => {
  const { id } = useParams();
  return <DiscussionForm isEdit id={id} />;
};

export default EditDiscussion;