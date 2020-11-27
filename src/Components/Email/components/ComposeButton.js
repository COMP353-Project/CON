import '../css/ComposeButton.css';
import React from 'react';

const ComposeButton = ({ onClick }) => {
  return (
    <div className="compose-button" onClick={onClick ? onClick : () => {}}>
      Compose
    </div>
  );
};

export default ComposeButton;