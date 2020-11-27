import './EmailHomePage.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Inbox from './Inbox';
import Sent from './Sent';

const EmailHomePage = () => {
  return (
    <div className="container">
      <div className="buttons">
        <div className="buttons">
          <Link to="/email/home/inbox" className="link nav-item">Inbox</Link>
          <div style={{ width: '30px' }} />
          <Link to="/email/home/sent" className="link nav-item">Sent</Link>
        </div>
        <div class="button">
          <Link to="/email/compose/" className="link compose-button">Compose</Link>
        </div>
      </div>
      <Route path="/email/home/inbox" component={Inbox} />
      <Route path="/email/home/sent" component={Sent} />
    </div>
  );
};

export default EmailHomePage;