import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import '../../css/GlobalStyles.css';

function GroupsNav () {
  return (
    <div className="nav">
      <Button component={NavLink} to='/groups-home/my-groups' color="inherit" activeClassName="selected">My Groups</Button>
      <Button component={NavLink} to='/groups-home/all-groups' color="inherit" activeClassName="selected">All Groups</Button>
    </div>
  );
}

export default GroupsNav;