import '../css/ConversationMessage.css';
import React from 'react';

const ConversationMessage = ({ from, date, message }) => {
  return (
    <div className="conversation-message">
      <div><span>From:</span> {from}</div>
      <div><span>Date:</span> {date}</div>
      <div className="separator" />
      <div className="description">{message}</div>
      <div className="separator" />
    </div>
  );
};

export default ConversationMessage;