import React from 'react';
import { useParams } from 'react-router-dom';
import VoteForm from '../components/VoteForm';

const EditVote = () => {
  const { id } = useParams();

  return <VoteForm isEdit id={id} />;
};

export default EditVote;