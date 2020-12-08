import '../css/Conversation.css';
import React, { useEffect, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ConversationMessage from '../components/ConversationMessage';
import { Context as EmailContext } from '../../../context/EmailContext';
import Spinner from '../../Global/Spinner';

const Conversation = () => {
  const { id } = useParams();
  const { state: { messages, isLoading, error }, fetchConversation, sendEmail } = useContext(EmailContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchConversation({ conversationId: id });
  }, []);

  const renderConversationMessages = () => {
    if (!messages) return null;

    return messages.map(({ id, first_name, last_name, created_at, content }) => {
      const from = first_name + ' ' + last_name;
      return (
        <ConversationMessage
          key={id}
          from={from}
          date={created_at}
          message={content}
        />
      );
    })
  };

  return (
    <div className="conversation">
      <div className="breadcrumb">
        <Link to="/email" className="back-button">&lt; Back to Conversations</Link>
      </div>
      <div className="box-container">
        <div className="header">
          <span style={{ fontWeight: 'bold' }}>Subject:</span> Subject title
          {isLoading ? <Spinner /> : null}
        </div>
        <div className="body">
          {renderConversationMessages()}
          <div style={{ height: '10px' }} />
          {error ? <p style={{ color: 'red' }}>{error}</p> : null}
          <div style={{ height: '10px' }} />
          <form className="ui form">
            <div className="field message-form">
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                type="paragraph_text"
                cols="500"
                rows="8"
                placeholder="Write your email here..."
              />
              <div
                className="submit-button"
                onClick={async () => {
                  setMessage('');
                  await sendEmail({ conversationId: id, content: message });
                  fetchConversation({ conversationId: id });
                }}
              >
                Send
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Conversation;