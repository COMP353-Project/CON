import { Link } from 'react-router-dom';
import React from 'react';

const MeetingCard = ({ id, title, created_at, description, agenda, resolution, minutes }) => {

  const RenderDescription = () => {
    if (description.length < 250) return description;

    return description.substr(0, 250) + '...';
  };

  return (
    <div className={minutes ? "card admin" : "card general"}>
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <div className="card-date">{created_at}</div>
      </div>
      <div className="card-agenda"><RenderDescription /></div>
      {minutes && < Link to={`/condo-association/meetings-admin/${id}`}>
        <div className="details-button">View Details</div>
      </Link>}
      {resolution && < Link to={`/condo-association/meetings-general/${id}`}>
        <div className="details-button">View Details</div>
      </Link>}
    </div>
  );
};

export default MeetingCard;