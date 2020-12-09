import '../css/Button.css';
import React from 'react';

const Button = ({ title, className }) => {
  return (
    <button className={className}>
      {title}
    </button>
  );
};

export default Button;