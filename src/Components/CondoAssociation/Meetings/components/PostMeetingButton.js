import '../../../../css/GlobalStyles.css'
import React from 'react';

const PostMeetingButton = ({ title }) => {
  return (
    <div className="post-btn">{title || 'Post Meeting'}</div>
  );
};

export default PostMeetingButton;