<<<<<<< HEAD
import '../css/VotesStyles.css';
import '../../../../css/GlobalStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';

const VoteCard = ({ id, title, deadline, description }) => {
  const renderDescription = () => {
    if (description.length < 250) return description;

    return description.substring(0, 250) + '...';
  };

  return (
    <div className="card vertical-separator large">
      <div className="card-title vertical-separator small">{title}</div>
      <div className="row vertical-separator small">
        <div className="info-label">Deadline:</div>
        <div className="card-date">{deadline}</div>
      </div>
      <div className="card-description vertical-separator small">{renderDescription()}</div>
=======
import { Link } from 'react-router-dom';
import React from 'react';

const VoteCard = ({ id, type, title, deadline, description }) => {

  const renderDescription = () => {
    if (description.length < 250) return description;

    return description.substr(0, 250) + '...';
  };

  return (
    <div className={"card " + type}>
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <div className="card-date">Deadline: {deadline}</div>
      </div>
      <div className="card-description">{renderDescription()}</div>
>>>>>>> develop
      <Link to={`/condo-association/votes/${id}`}>
        <div className="details-button">View Details</div>
      </Link>
    </div>
  );
};

export default VoteCard;