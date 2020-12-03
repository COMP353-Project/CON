import '../css/DiscussionCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '../../../Global/Box';
import '../../../../css/GlobalStyles.css';

const DiscussionCard = ({ id, title, author, date, description, commentsLength }) => {
  const renderDescription = () => {
    if (description.length < 250) return description;

    return description.substring(0, 250) + '...';
  };

  return (
    <div>
      <Box>
        <div className="card-info">
          <h3 className="card-title"/*style={{ fontSize: '25px', fontWeight: 500 }}*/>{title}</h3>
          <div className="card-author">{author}</div>
          <div className="card-date">{date}</div>
        </div>
        <div className="card-description">{renderDescription()}</div>
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