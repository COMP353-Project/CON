import '../css/ConversationsTableHeader.css'
import React from 'react';

const ConversationsTableHeader = () => {
  return (
    <div className="conversations-table-header">
      <li className="stretch">Subject</li>
      <li className="stretch">From</li>
      <li className="stretch">Date</li>
      <li style={{ flex: 1 }}>Delete</li>
    </div>
  );
};

export default ConversationsTableHeader;