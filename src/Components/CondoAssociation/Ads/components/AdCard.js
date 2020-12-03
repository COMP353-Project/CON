import '../css/AdCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '../../../Global/Box';
import '../../../../css/GlobalStyles.css';

const AdCard = ({ id, title, author, price, date, description }) => {

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
          <div className="card-author">{author}</div>
          <div className="card-date">{date}</div>
        </div>
        <div className="card-description">{renderDescription()}</div>
        <Link to={`/condo-association/ads/${id}`}>
          <div className="details-button">View Details</div>
        </Link>
      </Box>
    </div>
  );
};

export default AdCard;