import '../css/AdForm.css';
import '../../../../css/GlobalStyles.css'
import React from 'react';
import PostAdButton from './PostAdButton';
import BackButton from '../../../Global/BackButton';
import CondoNav from '../../CondoNav';

const AdForm = ({ isEdit, id }) => {
  return (
    <>
      <CondoNav />
      <div style={{ padding: '30px' }}>
        <BackButton />
        <div className="page-header">
          <div className="title-text">{isEdit ? 'Edit Ad' : 'Post Ad'}</div>
          {isEdit
          ? <div className="buttons-container">
            <div className="delete">Delete Ad</div>
            <PostAdButton title="Edit Ad" />
          </div>
          : <PostAdButton />}
        </div>
        <form className="ui form">
          <div className="field">
            <div className="fields">
              <div className="ten wide field">
                <input type="text" placeholder="Ad Title" />
              </div>
              <div className="three wide field">
                <input type="number" placeholder="Contact Number" />
              </div>
              <div className="three wide field">
                <input type="number" step="0.01" placeholder="Ad Price" />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" tabIndex="0" />
              <label>Make the Ad Public</label>
            </div>
          </div>
          <div className="field">
            <textarea rows="10" cols="2" placeholder="Ad Description" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AdForm;