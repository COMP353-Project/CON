import React from 'react';

const PostAdButton = ({ title }) => {
  return (
    <button className="post-btn">{title || 'Post Ad'}</button>
  );
};

export default PostAdButton;