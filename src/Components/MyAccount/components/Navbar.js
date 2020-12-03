import '../css/Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const path = window.location.pathname;

  let selected = '';

  (() => {
    if (path.includes('/my-account/friends')) {
      return selected = 'friends';
    }
    if (path.includes('/my-account/financial-status')) {
      return selected = 'financial-status';
    }
    if (path.includes('/my-account/condos')) {
      return selected = 'condos';
    }
    return selected = 'profile';
  })();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#EAEAEA',
      padding: '10px',
      color: 'rgb(57, 168, 149)'
    }}>
      <Link className={`nav-item ${selected === 'profile' ? 'bold' : ''}`} to="/my-account/">Profile</Link>
      <Link className={`nav-item ${selected === 'friends' ? 'bold' : ''}`} to="/my-account/friends">Friends</Link>
      <Link className={`nav-item ${selected === 'financial-status' ? 'bold' : ''}`} to="/my-account/financial-status">
        Financial Status
      </Link>
      <Link className={`nav-item ${selected === 'condos' ? 'bold' : ''}`} to="/my-account/condos">Condos</Link>
    </div>
  );
};

export default Navbar;