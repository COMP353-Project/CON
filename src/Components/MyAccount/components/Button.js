import '../css/Button.css';
import React from 'react';

const Button = ({ title, color, style, onClick }) => {
  return (
    <div onClick={onClick} className="button" style={{ backgroundColor: color, ...style }}>
      {title}
    </div>
  );
};

export default Button;