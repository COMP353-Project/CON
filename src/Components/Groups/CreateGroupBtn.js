import React from 'react';

const CreateGroupButton = ({ title }) => {
  return (
    <div className="post-btn">{title || 'Create Group'}</div>
  );
};

export default CreateGroupButton;