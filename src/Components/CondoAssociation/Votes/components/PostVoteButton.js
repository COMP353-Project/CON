import React from 'react';

const PostVoteButton = ({ title }) => {
  return (
    <div className="post-btn">{title || 'Post Vote'}</div>
  );
};

export default PostVoteButton;