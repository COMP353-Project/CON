import React, { Fragment } from 'react';
import PaymentCard from '../components/PaymentCard';

const payments = [
  { id: 0, description: 'Payment Description', date: 'January 12th, 2020', fee: 199.99 },
  { id: 1, description: 'Payment Description', date: 'January 12th, 2020', fee: 199.99 },
  { id: 2, description: 'Payment Description', date: 'January 12th, 2020', fee: 199.99 },
  { id: 3, description: 'Payment Description', date: 'January 12th, 2020', fee: 199.99 }
];

const transactions = [
  { id: 0, description: 'Payment Description', date: 'January 12th, 2020', fee: 199.99 },
  { id: 1, description: 'Payment Description', date: 'January 12th, 2020', fee: 199.99 },
  { id: 2, description: 'Payment Description', date: 'January 12th, 2020', fee: 199.99 },
  { id: 3, description: 'Payment Description', date: 'January 12th, 2020', fee: 199.99 }
];

const FinancialStatus = () => {
  const renderPayments = () => {
    return payments.map(({ id, description, date, fee }) => {
      return (
        <Fragment key={id}>
          <PaymentCard
            id={id}
            description={description}
            date={date}
            fee={fee}
          />
        </Fragment>
      );
    });
  };

  const renderTransactions = () => {
    return transactions.map(({ id, description, date, fee }) => {
      return (
        <Fragment key={id}>
          <PaymentCard
            id={id}
            isPaid
            description={description}
            date={date}
            fee={fee}
          />
        </Fragment>
      );
    });
  };

  return (
    <div>
      <h1>Financial Status</h1>
      <div style={{ display: 'flex', flexDirection: 'row', fontSize: '18px', marginBottom: '40px' }}>
        <span style={{ fontWeight: 'bold' }}>Total due:</span>
        <div style={{ color: 'rgb(57, 168, 149)', fontWeight: 'bold' }}>1500$</div>
      </div>
      <h2>Payments</h2>
      {renderPayments()}
      <h2>Transactions</h2>
      {renderTransactions()}
    </div>
  );
};

export default FinancialStatus;