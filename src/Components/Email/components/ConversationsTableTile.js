import '../css/ConversationsTableTile.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ConversationsTableTile = ({ id, subject, recipients, date, onDelete }) => {
  const renderRecipients = () => {
    let str = '';
    for (let i = 0; i < recipients.length; i++) {
      str += recipients[i] + (i < (recipients.length - 1) ? ', ' : '');
    }
    return str;
  };

  return (
    <div className="conversations-table-row">
      <div className="conversations-table-el">
        <Link to={`/email/conversations/${id}`} className="link">
          {subject}
        </Link>
      </div>
      <div className="conversations-table-el">{recipients ? renderRecipients() : ''}</div>
      <div className="conversations-table-el">{date}</div>
      <div className="conversations-table-el del" onClick={onDelete ? onDelete : () => {}}>X</div>
    </div>
  );
};

export default ConversationsTableTile;