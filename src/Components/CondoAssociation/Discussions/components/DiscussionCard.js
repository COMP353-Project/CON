import '../css/DiscussionCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '../../../Global/Box';

const DiscussionCard = ({ id, title, author, date, description, commentsLength }) => {
  const renderDescription = () => {
    if (description.length < 250) return description;

    return description.substring(0, 250) + '...';
  };

  return (
    <div>
      <Box>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ fontSize: '25px', fontWeight: 500 }}>{title}</div>
          <div className="horizontal-separator" />
          <div className="author">{author}</div>
          <div className="horizontal-separator" />
          <div className="date">{date}</div>
        </div>
        <div className="vertical-separator" />
        <div className="description">{renderDescription()}</div>
        <div className="vertical-separator" />
        <Link to={`/condo-association/discussions/${id}`}>
          <div className="comments-button">
            View Comments ({commentsLength})
          </div>
        </Link>
      </Box>
    </div>
  );
};

export default DiscussionCard;