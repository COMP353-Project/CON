import '../css/AdCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '../../../Global/Box';

const AdCard = ({ condo_assoc_post_id, title, description, price, contact_number, first_name, last_name, created_at }) => {

  const renderDescription = () => {
    if (description.length < 250) return description;

    return description.substr(0, 250) + '...';
  };

  return (
    <div>
      <Box>
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <div className="card-price">{price}$</div>
          <div className="card-author">{first_name}</div>
          <div className="card-date">{created_at}</div>
        </div>
        <div className="card-description">{renderDescription()}</div>
        <Link to={`/condo-association/ads/${condo_assoc_post_id}`}>
          <div className="details-button">View Details</div>
        </Link>
      </Box>
    </div>
  );
};

export default AdCard;