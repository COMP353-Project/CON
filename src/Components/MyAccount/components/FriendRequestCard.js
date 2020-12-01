import React from 'react';
import Box from '../../Global/Box';
import Button from './Button';

const FriendRequestCard = ({ from, date }) => {
  return (
    <Box style={{ padding: '10px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>{from}</div>
          <div className="horizontal-separator" />
          <div className="date">{date}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button title="Accept" />
          <div className="horizontal-separator" />
          <Button title="Reject" color="#696969" />
        </div>
      </div>
    </Box>
  );
};

export default FriendRequestCard;