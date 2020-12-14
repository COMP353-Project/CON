import '../css/PostDiscussionButton.css';
import React from 'react';

const PostDiscussionButton = ({ title, onClick }) => {
  return (
    <div className="post-btn" onClick={onClick}>
      {title || 'Post Discussion'}
    </div>
  );
};

export default PostDiscussionButton;