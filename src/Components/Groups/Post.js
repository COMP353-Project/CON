import './css/GroupPost.css';
import React from 'react';
import Box from '../Global/Box';

const Post = ({title, user, date, description }) => {
  const renderDescription = () => {
    if (description.length < 250) return description;

    return description.substring(0, 250) + '...';
  };

  return (
    <div>
      <Box>
        <div className="card-info">
          <h3 className="card-title"/*style={{ fontSize: '25px', fontWeight: 500 }}*/>{title}</h3>
          <div className="card-author">{user}</div>
          <div className="card-date">{date}</div>
        </div>
        <div className="card-description">{renderDescription()}</div>
      </Box>
      
    </div>
  );
};

export default Post;