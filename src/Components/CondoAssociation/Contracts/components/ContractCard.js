import '../../../../css/GlobalStyles.css';
import React from 'react';
import Box from '../../../Global/Box';
import { Link } from 'react-router-dom';

const ContractCard = ({ id, name, description, budget, created_at }) => {
  const renderDescription = () => {
    if (description.length < 250) return description;

    return description.substring(0, 250) + '...';
  };
  
  return (
    <div>
      <Box>
        <div className="card-info">
          <h3 className="card-title">{name}</h3>
          <div className="card-price">${budget}</div>
          <div className="card-date">{created_at}</div>
        </div>
        <div className="card-description">{renderDescription()}</div>
        <Link to={`/condo-association/contracts/${id}`}>
          <div className="details-button">
            View Details
          </div>
        </Link>
      </Box>
    </div>
  );
};

export default ContractCard;