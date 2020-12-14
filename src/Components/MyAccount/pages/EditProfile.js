import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import BackButton from '../../Global/BackButton';
import { Context as AccountContext } from '../../../context/AccountContext';

const EditProfile = () => {
  const history = useHistory();
  const { fetchUser, updateProfile, updatePassword, state: { user } } = useContext(AccountContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    (async () => {
      await fetchUser();

      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
      setAddress(user.address);
    })();
  }, []);

  return (
    <div>
      <BackButton />
      <div className="page-header">
        <h1>Edit Info</h1>
        <Button
          className="post-btn"
          title="Edit Info"
          onClick={async () => {
            await updateProfile({ firstName, lastName, email, address });

            history.goBack();
          }}
        />
      </div>
      <form className="ui form" style={{ width: '100%' }}>
        <div className="field">
          <label>Name</label>
          <div className="two fields">
            <div className="field">
              <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder="First Name" />
            </div>
            <div className="field">
              <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder="Last Name" />
            </div>
          </div>
        </div>
        <div className="field">
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
        </div>
        <div className="field">
          <label>Address</label>
          <input value={address} onChange={e => setAddress(e.target.value)} type="text" placeholder="Address" />
        </div>
      </form>
      <div style={{ height: '30px' }} />
      <div className="page-header">
        <h1>Privacy</h1>
        <Button
          className="post-btn"
          title="Update Privacy Settings"
          onClick={async () => {
            await updatePassword({ currentPassword, newPassword, confirmNewPassword });

            history.goBack();
          }}
        />
      </div>
      <form className="ui form">
        <div className="field">
          <label>Current Password</label>
          <input
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            type="password"
            placeholder="Current Password"
          />
        </div>
        <div className="field">
          <label>New Password</label>
          <div className="two fields">
            <div className="field">
              <input
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="field">
              <input
                value={confirmNewPassword}
                onChange={e => setConfirmNewPassword(e.target.value)}
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;