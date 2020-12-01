import '../css/Conversation.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ConversationMessage from '../components/ConversationMessage';

const messages = [
  {
    id: 0,
    from: 'Person Name',
    date: 'January 12th, 2020',
    message: 'empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'
  },
  {
    id: 1,
    from: 'Person Name',
    date: 'January 12th, 2020',
    message: 'empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'
  },
  {
    id: 2,
    from: 'Person Name',
    date: 'January 12th, 2020',
    message: 'empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'
  },
  {
    id: 3,
    from: 'Person Name',
    date: 'January 12th, 2020',
    message: 'empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'
  },
  {
    id: 4,
    from: 'Person Name',
    date: 'January 12th, 2020',
    message: 'empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'
  },
];

const Conversation = () => {
  const renderConversationMessages = () => {
    return messages.map(({ id, from, date, message }) => {
      return (
        <ConversationMessage
          key={id}
          from={from}
          date={date}
          message={message}
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
          <span style={{ fontWeight: 'bold' }}>Subject:</span> Subject Title
        </div>
        <div className="body">
          {renderConversationMessages()}
          <form className="ui form">
            <div className="field message-form">
              <textarea
                type="paragraph_text"
                cols="500"
                rows="8"
                placeholder="Write your email here..."
              />
              <div className="submit-button">Send</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Conversation;