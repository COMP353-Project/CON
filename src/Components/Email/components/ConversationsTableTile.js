import '../css/ConversationsTableTile.css';
import React from 'react';

const ConversationsTableTile = ({ subject, recipients, date, onDelete }) => {
  const renderRecipients = () => {
    let str = '';
    for (let i = 0; i < recipients.length; i++) {
      str += recipients[i] + (i < (recipients.length - 1) ? ', ' : '');
    }
    return str;
  };

  return (
    <div className="conversations-table-tile">
      <li className="stretch">{subject}</li>
      <li className="stretch">{recipients ? renderRecipients() : ''}</li>
      <li className="stretch">{date}</li>
      <li
        style={{ flex: 1, color: 'red', fontWeight: 'bold', cursor: 'pointer' }}
        onClick={onDelete ? onDelete : () => {}}
      >
          X
      </li>
    </div>
  );
};

export default ConversationsTableTile;