import { Link } from 'react-router-dom';
import React from 'react';

const MeetingCard = ({ id, admin, title, date, duration, description }) => {

  const renderDescription = () => {
    if (description.length < 250) return description;

    return description.substr(0, 250) + '...';
  };

  return (
    <div className={admin ? "card admin" : "card general"}>
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <div className="card-duration">Duration: {duration}</div>
        <div className="card-date">{date}</div>
      </div>
      <div className="card-description">{renderDescription()}</div>
      <Link to={`/condo-association/meetings/${id}`}>
        <div className="details-button">View Details</div>
      </Link>
    </div>
  );
};

export default MeetingCard;