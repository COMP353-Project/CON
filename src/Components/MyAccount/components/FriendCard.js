import React from 'react';
import Box from '../../Global/Box';
import Button from './Button';

const FriendCard = ({ friendName, date }) => {
  return (
    <Box>
      <div className="card-info">
        <div className="friend-info">
          <div className="friend-name">{friendName}</div>
          <div className="date">{date}</div>
        </div>
        <Button title="Remove" className="post-btn del" />
      </div>
    </Box>
  );
};

export default FriendCard;