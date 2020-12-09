import '../css/ConversationsTable.css';
import React, { useContext } from 'react';
import ConversationsTableHeader from './ConversationsTableHeader';
import ConversationsTableTile from './ConversationsTableTile';
import { Context as EmailContext } from '../../../context/EmailContext';

const ConversationsTable = ({ conversations }) => {
  const { leaveConversation, fetchConversations } = useContext(EmailContext);

  const renderConversationsTableTiles = () => {
    if (!conversations) return null;

    return Object.keys(conversations).map(key => {
      const { id, subject, members, updated_at } = conversations[key];
      return (
        <ConversationsTableTile
          key={id}
          id={id}
          subject={subject}
          members={members}
          date={updated_at}
          onDelete={async () => {
            await leaveConversation({ conversationId: id });
            fetchConversations();
          }}
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