import '../css/VotesStyles.css';
import '../../../../css/GlobalStyles.css';
import React from 'react';
import BackButton from '../../../Global/BackButton';
import Nav from '../../CondoNav';
import PostPollButton from '../components/PostPollButton';
import VoteForm from '../components/VoteForm';

const PostPoll = () => {
  return (
    <>
      <Nav />
      <div className="page-container">
        <BackButton />
        <div className="page-header">
          <h1>Post Poll</h1>
          <PostPollButton />
        </div>
        <VoteForm />
      </div>
    </>
  );
};

export default PostPoll;