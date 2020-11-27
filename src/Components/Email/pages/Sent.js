import React from 'react';
import ConversationsTable from '../components/ConversationsTable';

const conversations = [
  {
    id: 1,
    subject: 'Subject Name',
    recipients: ['person1@email.com', 'person2@email.com', 'person3@email.com'],
    date: 'January 20th 2020'
  },
  {
    id: 2,
    subject: 'Subject Name',
    recipients: ['person1@email.com', 'person2@email.com', 'person3@email.com'],
    date: 'January 20th 2020'
  },
  {
    id: 3,
    subject: 'Subject Name',
    recipients: ['person1@email.com', 'person2@email.com', 'person3@email.com'],
    date: 'January 20th 2020'
  },
  {
    id: 4,
    subject: 'Subject Name',
    recipients: ['person1@email.com', 'person2@email.com', 'person3@email.com'],
    date: 'January 20th 2020'
  },
  {
    id: 5,
    subject: 'Subject Name',
    recipients: ['person1@email.com', 'person2@email.com', 'person3@email.com'],
    date: 'January 20th 2020'
  },
];

const Sent = () => {
  return (
    <div>
      <h1>Sent</h1>
      <ConversationsTable conversations={conversations} />
    </div>
  );
};

export default Sent;