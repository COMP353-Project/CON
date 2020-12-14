import React, { Fragment } from 'react';
import CondoCard from '../components/CondoCard';

const condos = [
  { id: 235432, size: 800, acquiredDate: 'January 12th 2020' },
  { id: 21235432, size: 800, acquiredDate: 'January 12th 2020' },
  { id: 234676, size: 800, acquiredDate: 'January 12th 2020' },
];

const Condos = () => {
  const renderCondos = () => {
    return condos.map(({ id, size, acquiredDate }) => {
      return (
        <Fragment key={id}>
          <CondoCard id={id} size={size} acquiredDate={acquiredDate} />
        </Fragment>
      );
    })
  };

  return (
    <div>
      <h1>My Condos (hardcoded)</h1>
      {renderCondos()}
    </div>
  );
};

export default Condos;