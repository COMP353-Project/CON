import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EditProfile from './EditProfile';
import Profile from './Profile';

const ProfileNav = () => {
  return (
    <Switch>
      <Route path="/my-account/edit" component={EditProfile} />
      <Route path="/my-account/" component={Profile} />
    </Switch>
  );
};

export default ProfileNav;