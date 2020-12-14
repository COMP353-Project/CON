import React, { Fragment } from 'react';
import BackButton from '../../Global/BackButton';
import ParkingCard from '../components/ParkingCard';
import StorageCard from '../components/StorageCard';

const parkings = [
  { id: 'F60', acquired: 'January 12th 2020' },
  { id: 'G42', acquired: 'January 12th 2020' },
  { id: 'P11', acquired: 'January 12th 2020' }
];

const storages = [
  { id: 'D22', size: 100, acquired: 'January 12th 2020' },
  { id: 'G35', size: 100, acquired: 'January 12th 2020' }
];

const Condo = () => {
  const renderParkings = () => {
    return parkings.map(({ id, acquired }) => {
      return (
        <Fragment key={id}>
          <ParkingCard id={id} acquired={acquired} />
        </Fragment>
      );
    });
  };

  const renderStorages = () => {
    return storages.map(({ id, size, acquired }) => {
      return (
        <Fragment key={id}>
          <StorageCard id={id} size={size} acquired={acquired} />
        </Fragment>
      );
    });
  };

  return (
    <div>
      <BackButton />
      <h2 className="condo-heading">Condo Details (Hardcoded)</h2>
      <div className="condo-spec">
        <div className="condo-spec-title">Condo:</div>
        <div className="condo-spec-value">1341234</div>
      </div>
      <div className="condo-spec">
        <div className="condo-spec-title">Size:</div>
        <div className="condo-spec-value">500 ft</div>
      </div>
      <div className="condo-spec">
        <div className="condo-spec-title">Acquired:</div>
        <div className="condo-spec-value">January 12th 2020</div>
      </div>
      <h2 className="condo-heading">Parking Spots (Hardcoded)</h2>
        {renderParkings()}
      <h2 className="condo-heading">Storage Spaces (Hardcoded)</h2>
        {renderStorages()}
    </div>
  );
};

export default Condo;