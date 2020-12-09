import React from 'react';
import Box from '../../Global/Box';
import Button from './Button';

const FriendCard = ({ friendFName, friendLName, date }) => {
  return (
    <Box>
      <div className="card-info">
        <div className="friend-info">
          <div className="friend-name">{friendFName + ' ' + friendLName}</div>
          <div className="date">{date}</div>
        </div>
        <Button title="Remove" className="post-btn del" />
      </div>
    </Box>
  );
};

export default FriendCard;
