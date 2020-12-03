import React from 'react';
import Box from '../../Global/Box';

const StorageCard = ({ id, size, acquired }) => {
  return (
    <Box>
      <div className="condo-spec">
        <div className="condo-spec-title">Storage:</div>
        <div className="condo-spec-value">{id}</div>
      </div>
      <div className="condo-spec">
        <div className="condo-spec-title">Size:</div>
        <div className="condo-spec-value">{size} sqft</div>
      </div>
      <div className="condo-spec">
        <div className="condo-spec-title">Acquired:</div>
        <div className="condo-spec-value">{acquired}</div>
      </div>
    </Box>
  );
};

export default StorageCard;