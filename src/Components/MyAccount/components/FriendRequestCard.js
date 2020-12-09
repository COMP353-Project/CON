import React from 'react';
import Box from '../../Global/Box';
import Button from './Button';

const FriendRequestCard = ({ requesterFName, requesterLName, date }) => {
  return (
    <Box>
      <div className="card-info">
        <div className="friend-info">
          <div className="friend-name">{requesterFName + ' ' + requesterLName}</div>
          <div className="date">{date}</div>
        </div>
        <div className="friend-actions">
          <Button title="Accept" className="post-btn" />
          <Button title="Reject" className="post-btn del" />
        </div>
      </div>
    </Box>
  );
};

export default FriendRequestCard;