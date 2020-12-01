import '../../../../css/GlobalStyles.css'
import React from 'react';

const PostAdButton = ({ title }) => {
  return (
    <div className="post-btn">{title || 'Post Ad'}</div>
  );
};

export default PostAdButton;