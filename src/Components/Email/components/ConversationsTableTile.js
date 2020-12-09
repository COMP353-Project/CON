import '../css/ConversationsTableTile.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ConversationsTableTile = ({ id, subject, members, date, onDelete }) => {
  const renderRecipients = () => {
    const size = Object.keys(members).length;

    let str = '';
    let count = 0;
    for (let key in members) {
      count ++;
      str += members[key] + (count === size ? '' : ', ');
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
      <div className="conversations-table-el">{members ? renderRecipients() : ''}</div>
      <div className="conversations-table-el">{date}</div>
      <div className="conversations-table-el del" onClick={onDelete ? onDelete : () => {}}>X</div>
    </div>
  );
};

export default ConversationsTableTile;