import React from 'react';
import Box from '../../Global/Box';
import Button from './Button';

const FriendCard = ({ friendName, date }) => {
  return (
    <Box style={{ padding: '10px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>{friendName}</div>
          <div className="horizontal-separator" />
          <div className="date">{date}</div>
        </div>
        <Button title="Remove" color="#696969" />
      </div>
    </Box>
  );
};

export default FriendCard;