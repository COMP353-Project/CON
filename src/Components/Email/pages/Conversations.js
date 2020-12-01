import '../css/Conversations.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Inbox from './Inbox';
import Sent from './Sent';
import ComposeButton from '../components/ComposeButton';

const Conversations = () => {
  const path = window.location.pathname;
  const isSent = path === '/email/sent' || path === '/email/sent/';

  return (
    <div>
      <div class="page-header">
        <div class="select-menu">
          <Link
            to="/email/"
            className="header-button"
            style={{ fontWeight: `${!isSent ? 'bold' : '300'}` }}
          >Inbox</Link>
          <div style={{ width: '10px' }} />
          <Link
            to="/email/sent"
            className="header-button"
            style={{ fontWeight: `${isSent ? 'bold' : '300'}` }}
          >Sent</Link>
        </div>
        <Link to="/email/compose">
          <ComposeButton />
        </Link>
      </div>
      <div>
        <Switch>
          <Route path="/email/sent" component={Sent} />
          <Route path="/email/" component={Inbox} />
        </Switch>
      </div>
    </div>
  );
};

export default Conversations;