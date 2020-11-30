import '../css/CondoCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '../../Global/Box';

const CondoCard = ({ id, size, acquiredDate }) => {
  return (
    <Box>
      <div style={{ display: 'flex', flexDirection: 'row', fontSize: '23px' }}>
        <span style={{ fontWeight: 'bold' }}>Condo ID:</span>
        <div style={{ width: '7px' }} />
        <div>{id}</div>
      </div>
      <div style={{ height: '10px' }} />
      <div><span>Size: </span>{size} sqft</div>
      <div style={{ height: '3px' }} />
      <div><span>Acquired: </span>{acquiredDate}</div>
      <div style={{ height: '10px' }} />
      <Link to={`/my-account/condos/${id}`}>
        <div className="plain-button" style={{ fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', color: 'rgb(57, 168, 149)' }}>
          View Details
        </div>
      </Link>
    </Box>
  );
};

export default CondoCard;