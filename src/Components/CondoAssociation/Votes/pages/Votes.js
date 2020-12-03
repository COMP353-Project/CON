import '../css/VotesStyles.css';
import '../../../../css/GlobalStyles.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Polls from './Polls';
import Elections from './Elections';
import PostPollButton from '../components/PostPollButton';
import PostElectionButton from '../components/PostElectionButton';

const Votes = () => {
  const [isPolls, setIsPolls] = useState(true);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Votes</h1>
        {
          isPolls
          ? <Link to="/condo-association/votes/new-poll"><PostPollButton /></Link>
          : <Link to="/condo-association/votes/new-election"><PostElectionButton /></Link>
        }
      </div>
      <div className="subnav">
        <Button
          color="inherit"
          onClick={() => setIsPolls(true)}
          className={` ${isPolls ? 'selected' : ''}`}
        >
          Polls
        </Button>
        <Button
          color="inherit"
          onClick={() => setIsPolls(false)}
          className={`details-button ${!isPolls ? 'selected' : ''}`}
        >
          Elections
        </Button>
      </div>
      {
        isPolls
        ? <Polls />
        : <Elections />
      }
    </div>
  );
};

export default Votes;