import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import '../../css/GlobalStyles.css';

function MyGroupNav (id) {
  id = 1;
  return (
    <div className="nav">
      <Button component={NavLink} to={'/groups/' + id + '/home'} color="inherit" activeClassName="selected">Home</Button>
      <Button component={NavLink} to={'/groups/' + id + '/posts'} color="inherit" activeClassName="selected">Posts</Button>
      <Button component={NavLink} to={'/groups/' + id + '/requests'} color="inherit" activeClassName="selected">Requests</Button>
    </div>
  );
}

export default MyGroupNav;