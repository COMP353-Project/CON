import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './AdminStyles.css';

function AdminNav () {
  return (
    <div className="nav">
      <Button component={NavLink} to='/admin/users' color="inherit" activeClassName="selected">Manage Users</Button>
      <Button component={NavLink} to='/admin/groups' color="inherit" activeClassName="selected">Manage Groups</Button>
      <Button component={NavLink} to='/admin/ca' color="inherit" activeClassName="selected">Manage Condo Associations</Button>
      <Button component={NavLink} to='/admin/post' color="inherit" activeClassName="selected">Create Public Post</Button>
    </div>
  );
}

export default AdminNav;

