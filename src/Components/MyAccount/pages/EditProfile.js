import React from 'react';
import Button from '../components/Button';
import BackButton from '../../Global/BackButton';

const EditProfile = () => {
  return (
    <div>
      <BackButton />
      <div className="page-header">
        <h1>Edit Info</h1>
        <Button title="Edit Info" />
      </div>
      <form className="ui form" style={{ width: '100%' }}>
        <div className="field">
          <label>Name</label>
          <div className="two fields">
            <div className="field">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="field">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="field">
          <label>Address</label>
          <input type="text" placeholder="Address" />
        </div>
      </form>
      <div className="page-header">
        <h1>Privacy</h1>
        <Button title="Update Privacy Settings" />
      </div>
      <form className="ui form">
        <div className="field">
          <label>Current Password</label>
          <input type="text" placeholder="Current Password" />
        </div>
        <div className="field">
          <label>New Password</label>
          <div className="two fields">
            <div className="field">
              <input type="text" placeholder="Password" />
            </div>
            <div className="field">
              <input type="text" placeholder="Confirm Password" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;