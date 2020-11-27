import './Inbox.css';
import React from 'react';
import ConversationsList from './ConversationsList';

const conversationsArray = [
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

const Inbox = () => {
  return (
    <>
      <h1>Inbox</h1>
      <ConversationsList conversations={conversationsArray} />
    </>
  );
};

export default Inbox;