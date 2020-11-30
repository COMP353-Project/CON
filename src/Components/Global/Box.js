import '../../css/Box.css';
import React from 'react';

const Box = ({ children, style }) => {
  return (
    <div className="box" style={style}>
      {children}
    </div>
  );
};

export default Box;