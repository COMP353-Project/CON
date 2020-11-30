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
          <div style={{ height: '10px' }} />
          <ParkingCard id={id} acquired={acquired} />
        </Fragment>
      );
    });
  };

  const renderStorages = () => {
    return storages.map(({ id, size, acquired }) => {
      return (
        <Fragment key={id}>
          <div style={{ height: '10px' }} />
          <StorageCard id={id} size={size} acquired={acquired} />
        </Fragment>
      );
    });
  };

  return (
    <div>
      <BackButton />
      <div style={{ height: '20px' }} />
      <div style={{ display: 'flex', flexDirection: 'row', fontSize: '35px' }}>
        <div style={{ fontWeight: 500 }}>Condo:</div>
        <div style={{ width: '6px' }} />
        <div>1341234</div>
      </div>
      <div style={{ height: '20px' }} />
      <div style={{ fontSize: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <span>Size:</span>
          <div style={{ width: '6px' }} />
          <div>500 ft</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <span>Acquired:</span>
          <div style={{ width: '6px' }} />
          <div>January 12th 2020</div>
        </div>
      </div>
      <h2>Parking Spots</h2>
      {renderParkings()}
      <h2>Storage Spaces</h2>
      {renderStorages()}
    </div>
  );
};

export default Condo;