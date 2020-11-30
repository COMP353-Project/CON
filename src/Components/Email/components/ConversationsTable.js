import '../css/ConversationsTable.css';
import React from 'react';
import ConversationsTableHeader from './ConversationsTableHeader';
import ConversationsTableTile from './ConversationsTableTile';

const ConversationsTable = ({ conversations }) => {
  const renderConversationsTableTiles = () => {
    if (!conversations) return null;

    return conversations.map(({ id, subject, recipients, date }) => {
      return (
        <ConversationsTableTile
          key={id}
          id={id}
          subject={subject}
          recipients={recipients}
          date={date}
          onDelete={() => console.log(`Leave Conversation: ${id}`)}
        />
      );
    });
  };

  return (
    <div className="conversations-table">
      <ConversationsTableHeader />
      {renderConversationsTableTiles()}
    </div>
  );
};

export default ConversationsTable;