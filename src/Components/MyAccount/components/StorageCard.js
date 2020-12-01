import React from 'react';
import Box from '../../Global/Box';

const StorageCard = ({ id, size, acquired }) => {
  return (
    <Box>
      <div style={{ display: 'flex', flexDirection: 'row', fontSize: '25px' }}>
        <div style={{ fontWeight: 600 }}>Storage:</div>
        <div style={{ width: '6px' }} />
        <div>{id}</div>
      </div>
      <div style={{ height: '10px' }} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ fontWeight: 600 }}>Size:</div>
        <div style={{ width: '6px' }} />
        <div>{size} sqft</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ fontWeight: 600 }}>Acquired:</div>
        <div style={{ width: '6px' }} />
        <div>{acquired}</div>
      </div>
    </Box>
  );
};

export default StorageCard;