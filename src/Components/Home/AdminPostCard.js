import React from 'react';
import Box from '../Global/Box';

const AdminPostCard = ({ title, content }) => {
  return (
    <div>
      <Box extraClasses="admin hp">
        <h3 className="admin-post-title">{title}</h3>
        <p className="admin-post-content">{content}</p>
      </Box>
    </div>
  );
};

export default AdminPostCard;