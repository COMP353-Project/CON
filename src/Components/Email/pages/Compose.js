import '../css/Compose.css'
import '../../../css/GlobalStyles.css'
import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ComposeButton from '../components/ComposeButton';
import { Context as EmailContext } from '../../../context/EmailContext';
import Spinner from '../../Global/Spinner';

const Compose = () => {
  const { createConversation, state: { isLoading, error } } = useContext(EmailContext);
  const history = useHistory();

  const [subject, setSubject] = useState('');
  const [recipients, setRecipients] = useState('');
  const [content, setContent] = useState('');

  const handleRecipients = () => {
    let formattedRecipients = recipients;
    formattedRecipients = formattedRecipients.replace(/\s/g, '');
    const recipientArray = formattedRecipients.split(',');
    return recipientArray;
  };

  const onSubmit = async () => {
    setSubject('');
    setRecipients('');
    setContent('');

    await createConversation({
      subject,
      recipients: handleRecipients(),
      content
    });

    if (!error) {
      history.goBack();
    }
  };

  return (
    <div>
      <div className="breadcrumb">
        <Link to="/email" className="back-button">&lt; Back to Conversations</Link>
      </div>
      <div className="page-header">
        <h1>Create Conversation</h1>
        {isLoading ? <Spinner /> : <ComposeButton onClick={onSubmit} />}
      </div>
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
      <form className="ui form">
        <div className="field">
          <input value={subject} type="text" placeholder="Subject" onChange={e => setSubject(e.target.value)} />
        </div>
        <div className="field">
          <input
            value={recipients}
            onChange={e => setRecipients(e.target.value)}
            type="text"
            placeholder="Recipients (separate emails with a comma)"
          />
        </div>
        <div className="field">
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            type="paragraph_text"
            cols="500"
            rows="10"
            placeholder="Write your email here..."
          />
        </div>
      </form>
    </div>
  );
};

export default Compose;