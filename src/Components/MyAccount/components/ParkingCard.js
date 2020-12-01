import React from 'react';
import Box from '../../Global/Box';

const ParkingCard = ({ id, acquired }) => {
  return (
    <Box>
      <div className="condo-spec">
        <div className="condo-spec-title">Parking:</div>
        <div className="condo-spec-value">{id}</div>
      </div>
      <div className="condo-spec">
        <div className="condo-spec-title">Acquired:</div>
        <div className="condo-spec-value">{acquired}</div>
      </div>
    </Box>
  );
};

export default ParkingCard;