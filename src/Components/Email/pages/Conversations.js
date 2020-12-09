import '../css/Conversations.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Inbox from './Inbox';
import ComposeButton from '../components/ComposeButton';
import { Context as EmailContext } from '../../../context/EmailContext';
import Spinner from '../../Global/Spinner';

const Conversations = () => {
  const { state: { isLoading, error } } = useContext(EmailContext);

  return (
    <div>
      <div className="page-header">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <h1>Inbox</h1>
          <div style={{ width: '10px' }} />
          {isLoading ? <Spinner /> : null}
        </div>
        <Link to="/email/compose">
          <ComposeButton />
        </Link>
      </div>
      <div>
        {error ? <p style={{ color: 'red' }}>{error}</p> : null}
        <Inbox />
      </div>
    </div>
  );
};

export default Conversations;