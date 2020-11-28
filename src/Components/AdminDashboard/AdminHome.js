import React from 'react';
import Nav from './AdminNav';
import './AdminStyles.css';

function AdminHome () {
  return (
    <div>
      <Nav />
      <div className="container--admin">
        This is your admin dashboard. Browse the navigation above to exercise your administrative rights.
      </div>
    </div>
  );
}

export default AdminHome;