import { Link } from 'react-router-dom';
import React from 'react';

const MeetingCard = ({ id, admin, title, created_at, description, agenda }) => {

  const RenderDescription = () => {
    if (description.length < 250) return description;

    return description.substr(0, 250) + '...';
  };


  return (
    <div className={admin ? "card admin" : "card general"}>
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        {/* <div className="card-duration">Duration: {duration}</div> */}
        <div className="card-date">{created_at}</div>
      </div>
      <div className="card-agenda"><RenderDescription /></div>
      <Link to={`/condo-association/meetings/${id}`}>
        <div className="details-button">View Details</div>
      </Link>
    </div>
  );

  // return (
  //   <div className={admin ? "card admin" : "card general"}>
  //     <div className="card-info">
  //       <h3 className="card-title">{title}</h3>
  //       {/* <div className="card-duration">Duration: {duration}</div> */}

  //       <div className="card-date">{created_at}</div>
  //     </div>
  //     <div className="card-description">
  //       <RenderDescription /></div>
  //     {/* <div className="card-description">
  //       <RenderAgenda /></div> */}
  //     <Link to={`/condo-association/meetings/${id}`}>
  //       <div className="details-button">View Details</div>
  //     </Link>
  //   </div>
  // );
};

export default MeetingCard;