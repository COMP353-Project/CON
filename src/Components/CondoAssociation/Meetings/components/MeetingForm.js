import '../../../../css/GlobalStyles.css'
import React from 'react';
import PostMeetingButton from './PostMeetingButton';
import BackButton from '../../../Global/BackButton';
import CondoNav from '../../CondoNav';

const MeetingForm = ({ isEdit, id }) => {
  return (
    <>
      <CondoNav />
      <div className="page-container">
        <BackButton />
        <div className="page-header">
          <div className="title-text">{isEdit ? 'Edit Meeting' : 'Post Meeting'}</div>
          {isEdit
          ? <div className="buttons-container">
            <div className="delete">Delete Meeting</div>
            <PostMeetingButton title="Edit Meeting" />
          </div>
          : <PostMeetingButton />}
        </div>
        <form className="ui form">
          <div className="field">
            <div className="fields">
              <div className="eleven wide field">
                <input type="text" placeholder="Meeting Title" />
              </div>
              <div className="three wide field">
                <input type="text" placeholder="Duration" />
              </div>
            </div>
          </div>
          <div className="field">
            <textarea rows="10" cols="2" placeholder="Meeting Description" />
          </div>
        </form>
      </div>
    </>
  );
};

export default MeetingForm;