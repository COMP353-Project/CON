import React from 'react';

const Box = ({ children, style }) => {
  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
};

export default Box;