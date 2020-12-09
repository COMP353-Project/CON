import '../css/Button.css';
import React from 'react';

const Button = ({ title, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};

export default Button;