import '../css/CondoCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '../../Global/Box';

const CondoCard = ({ id, size, acquiredDate }) => {
  return (
    <Box>
      <div className="condo-spec">
        <div className="condo-spec-title">Condo ID:</div>
        <div className="condo-spec-value">{id}</div>
      </div>
      <div className="condo-spec">
        <div className="condo-spec-title">Size:</div>
        <div className="condo-spec-value">{size} sqft</div>
      </div>
      <div className="condo-spec">
        <div className="condo-spec-title">Acquired:</div>
        <div className="condo-spec-value">{acquiredDate}</div>
      </div>
      <Link to={`/my-account/condos/${id}`}>
        <div className="plain-button">
          View Details
        </div>
      </Link>
    </Box>
  );
};

export default CondoCard;