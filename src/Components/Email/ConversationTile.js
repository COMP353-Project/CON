import './ConversationTile.css';
import React from 'react';

const ConversationTile = ({ key, subject, recipients, date }) => {
  const renderRecipients = () => {
    let recipientsStr = '';
    for (let i = 0; i < recipients.length; i++) {
      recipientsStr += `${recipients[i].email}${i === recipients.length -1 ? '' : ', '}`;
    }
    return recipientsStr;
  };

  return (
    <div className="conversationTile">
      <li className="tileCell">{subject}</li>
      <li className="tileCell recipients">{renderRecipients()}</li>
      <li className="tileCell">{date}</li>
      <li style={{ color: 'red' }}>X</li>
    </div>
  );
};

export default ConversationTile;