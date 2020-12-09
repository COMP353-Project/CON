<<<<<<< HEAD
import '../../../../css/GlobalStyles.css';
import '../css/VotesStyles.css';
import React from 'react';
import VoteForm from '../components/VoteForm';
import Nav from '../../CondoNav';
import BackButton from '../../../Global/BackButton';

const EditVote = () => {
  // TODO: Setting dummy value of true but we need the election info form the backend in order to determine  isElection
  const isElection = true;
  
  return (
    <>
      <Nav />
      <div className="page-container">
        <BackButton />
        <div className="page-header">
          <h1>Edit {isElection ? 'Election' : 'Poll'}</h1>
          <div className="row">
            <div className="post-btn del">Delete</div>
            <div className="post-btn">Submit</div>
          </div>
        </div>
        <VoteForm isElection={isElection} isEdit />
      </div>
    </>
  );
=======
import React from 'react';
import { useParams } from 'react-router-dom';
import VoteForm from '../components/VoteForm';

const EditVote = () => {
  const { id } = useParams();

  return <VoteForm isEdit id={id} />;
>>>>>>> develop
};

export default EditVote;