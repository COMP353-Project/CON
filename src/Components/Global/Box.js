import React from 'react';

const Box = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Box;