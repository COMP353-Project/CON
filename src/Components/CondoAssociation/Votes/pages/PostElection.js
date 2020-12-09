import '../../../../css/GlobalStyles.css';
import React from 'react';
import Nav from '../../CondoNav';
import VoteForm from '../components/VoteForm';
import BackButton from '../../../Global/BackButton';
import PostElectionButton from '../components/PostElectionButton';

const PostElection = () => {
  return (
    <>
      <Nav />
      <div className="page-container">
        <BackButton />
        <div className="page-header">
          <h1>Post Election</h1>
          <PostElectionButton />
        </div>
        <VoteForm isElection />
      </div>
    </>
  );
};

export default PostElection;