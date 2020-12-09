import React from 'react';
import PostVoteButton from './PostVoteButton';
import BackButton from '../../../Global/BackButton';
import CondoNav from '../../CondoNav';

const VoteForm = ({ isEdit, id }) => {
  return (
    <>
      <CondoNav />
      <div className="page-container">
        <BackButton />
        <div className="page-header">
          <div className="title-text">{isEdit ? 'Edit Vote' : 'Post Vote'}</div>
          {isEdit
          ? <div className="buttons-container">
            <div className="delete">Delete Vote</div>
            <PostVoteButton title="Edit Vote" />
          </div>
          : <PostVoteButton />}
        </div>
        <form className="ui form">
          <div className="field">
            <div className="fields">
              <div className="eleven wide field">
                <input type="text" placeholder="Vote Title" />
              </div>
              <div className="three wide field">
                <input type="text" placeholder="Deadline" />
              </div>
            </div>
          </div>
          <div className="field">
            <textarea rows="10" cols="2" placeholder="Vote Description" />
          </div>
        </form>
      </div>
    </>
  );
};

export default VoteForm;