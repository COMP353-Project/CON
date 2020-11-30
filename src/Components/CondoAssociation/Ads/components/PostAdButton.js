import '../css/PostAdButton.css';
import React from 'react';

const PostAdButton = ({ title }) => {
  return (
    <div className="post-ad-button">{title || 'Post Ad'}</div>
  );
};

export default PostAdButton;