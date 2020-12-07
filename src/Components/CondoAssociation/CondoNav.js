import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function CondoNav () {
  return (
    <div className="nav">
      <Button component={NavLink} to='/condo-association/discussions' color="inherit" activeClassName="selected">Discussions</Button>
      <Button component={NavLink} to='/condo-association/ads' color="inherit" activeClassName="selected">Ads</Button>
      <Button component={NavLink} to='/condo-association/meetings' color="inherit" activeClassName="selected">Meetings</Button>
      <Button component={NavLink} to='/condo-association/votes' color="inherit" activeClassName="selected">Votes</Button>
    </div>
  );
}

export default CondoNav;