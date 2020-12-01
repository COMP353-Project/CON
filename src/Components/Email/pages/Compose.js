import '../css/Compose.css'
import '../../../css/GlobalStyles.css'
import React from 'react';
import { Link } from 'react-router-dom';
import ComposeButton from '../components/ComposeButton';

const Compose = () => {
  return (
    <div>
      <div className="breadcrumb">
        <Link to="/email" className="back-button">&lt; Back to Conversations</Link>
      </div>
      <div className="page-header">
        <h1>Create Conversation</h1>
        <ComposeButton />
      </div>
      <form className="ui form">
        <div className="field">
          <input type="text" placeholder="Subject" />
        </div>
        <div className="field">
          <input type="text" placeholder="Recipients (separate emails with a space)" />
        </div>
        <div className="field">
          <textarea
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