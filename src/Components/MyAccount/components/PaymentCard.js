import React from 'react';
import Box from '../../Global/Box';
import Button from './Button';

const PaymentCard = ({ isPaid, description, date, fee }) => {
  return (
    <Box style={{ padding: '10px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ flex: 2 }}>{description}</div>
        <div style={{ flex: 1 }} className="date">{date}</div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', fontWeight: 'bold', color: 'rgb(57, 168, 149)' }}>{fee}$</div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            className={isPaid ? 'post-btn grey' : 'post-btn'}
            title={isPaid ? 'Paid' : 'Pay'}
            style={{ paddingLeft: '30px', paddingRight: '30px' }}
            color={isPaid ? '#696969' : null}
          />
        </div>
      </div>
    </Box>
  );
};

export default PaymentCard;