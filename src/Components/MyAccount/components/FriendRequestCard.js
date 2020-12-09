import React from 'react';
import Box from '../../Global/Box';
import Button from './Button';

const FriendRequestCard = ({ requesterName, date }) => {
  return (
    <Box>
      <div className="card-info">
        <div className="friend-info">
          <div className="friend-name">{requesterName}</div>
          <div className="card-date">{date}</div>
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