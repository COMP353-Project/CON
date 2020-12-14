import React from 'react';

const Box = ({ children, extraClasses }) => {
  return (
    <div className={extraClasses + " card"}>
      {children}
    </div>
  );
};

export default Box;