import './ConversationsList.css'
import React from 'react';
import ConversationTile from './ConversationTile';

const ConversationList = ({ conversations }) => {
  const renderConversations = () => {
    return conversations.map(({ id, subject, recipients, date }) => {
      return (
        <ConversationTile
          key={id}
          subject={subject}
          recipients={recipients}
          date={date}
        />
      );
    });
  };

  return(
    <div className="conversations-list">
      <div className="header">
        <li>Subject</li>
        <li>From</li>
        <li>Date</li>
        <li>Delete</li>
      </div>
      <div>
        {renderConversations()}
      </div>
    </div>
  );
};

export default ConversationList;