import './Sent.css';
import React from 'react';
import ConversationsList from './ConversationsList';

const conversations = [
  {
    id: 1,
    subject: 'My Subject',
    recipients: [{ id: 1, email: 'person@email.com' }, { id: 1, email: 'person@email.com' }],
    date: 'January 12th 2020',
  },
  {
    id: 2,
    subject: 'My Subject',
    recipients: [{ id: 1, email: 'person@email.com' }, { id: 1, email: 'person@email.com' }],
    date: 'January 12th 2020',
  },
  {
    id: 3,
    subject: 'My Subject',
    recipients: [{ id: 1, email: 'person@email.com' }, { id: 1, email: 'person@email.com' }],
    date: 'January 12th 2020',
  },
  {
    id: 4,
    subject: 'My Subject',
    recipients: [{ id: 1, email: 'person@email.com' }, { id: 1, email: 'person@email.com' }],
    date: 'January 12th 2020',
  },
  {
    id: 5,
    subject: 'My Subject',
    recipients: [{ id: 1, email: 'person@email.com' }, { id: 1, email: 'person@email.com' }],
    date: 'January 12th 2020',
  }
];

const Sent = () => {
  return (
    <>
      <h1>Sent</h1>
      <ConversationsList conversations={conversations} />
    </>
  );
};

export default Sent;