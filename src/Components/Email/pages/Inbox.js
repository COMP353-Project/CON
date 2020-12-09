import React, { useEffect, useContext } from 'react';
import ConversationsTable from '../components/ConversationsTable';
import { Context as EmailContext } from '../../../context/EmailContext';

const Inbox = () => {
  const { fetchConversations, state: { conversations } } = useContext(EmailContext);

  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    <div>
      <ConversationsTable conversations={conversations} />
    </div>
  );
};

export default Inbox;