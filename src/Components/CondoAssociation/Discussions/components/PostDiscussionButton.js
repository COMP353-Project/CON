import '../css/PostDiscussionButton.css';
import React from 'react';

const PostDiscussionButton = ({ title }) => {
  return (
    <div className="button">
      {title || 'Post Discussion'}
    </div>
  );
};

export default PostDiscussionButton;