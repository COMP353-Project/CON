import '../css/DiscussionForm.css';
import React from 'react';
import PostDiscussionButton from './PostDiscussionButton';
import BackButton from '../../../Global/BackButton';
import CondoNav from '../../CondoNav';

const PostDiscussion = ({ isEdit, id, title, isPrivate, content }) => {
  return (
    <>
      <CondoNav />
      <div style={{ padding: '30px' }}>
        <BackButton />
        <div className="vertical-separator" />
        <div className="header-box">
          <h1>{isEdit ? 'Edit Discussion' : 'Post Discussion'}</h1>
          {isEdit
          ? <div className="buttons-container">
            <div className="delete-button">Delete Discussion</div>
            <div className="horizontal-separator" />
            <PostDiscussionButton title="Edit Discussion" />
          </div>
          : <PostDiscussionButton />}
        </div>
        <div className="vertical-separator" />
        <form className="ui form">
          <div className="field">
            <input type="text" placeholder="Discussion Title" />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" tabIndex="0" />
              <label>Make Discussion Private</label>
            </div>
          </div>
          <div className="field">
            <textarea rows="10" cols="2" placeholder="Discussion Content" />
          </div>
        </form>
      </div>
    </>
  );
};

export default PostDiscussion;