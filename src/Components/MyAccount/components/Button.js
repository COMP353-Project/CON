import '../css/Button.css';
import React from 'react';

const Button = ({ title, color, style }) => {
  return (
    <div className="button" style={{ backgroundColor: color, ...style }}>
      {title}
    </div>
  );
};

export default Button;