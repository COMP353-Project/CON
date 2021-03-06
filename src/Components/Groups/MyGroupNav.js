import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink, useParams } from 'react-router-dom';

function MyGroupNav () {
  const { id } = useParams();
  
  return (
    <div className="nav">
      <Button component={NavLink} to={'/groups/' + id + '/home'} color="inherit" activeClassName="selected">Home</Button>
      <Button component={NavLink} to={'/groups/' + id + '/posts'} color="inherit" activeClassName="selected">Posts</Button>
      <Button component={NavLink} to={'/groups/' + id + '/requests'} color="inherit" activeClassName="selected">Requests</Button>
    </div>
  );
}

export default MyGroupNav;