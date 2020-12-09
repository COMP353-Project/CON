import '../../../../css/GlobalStyles.css';
import '../css/VotesStyles.css';
import React from 'react';

const OptionCard = ({ name, description, onDelete }) => {
  return (
    <div className="option-card">
      <div>
        <div className="option-name vertical-separator large">{name}</div>
        <div className="option-description">{description}</div>
      </div>
      <div className="delete-option-icon" onClick={onDelete}>X</div>
    </div>
  );
};

export default OptionCard;