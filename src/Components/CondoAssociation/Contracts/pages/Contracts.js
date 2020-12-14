import React, { useContext, useEffect } from 'react';
import CondoNav from '../../CondoNav';
import { Link } from 'react-router-dom';
import ContractCard from '../components/ContractCard';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';

const Contracts = () => {
  const { fetchContracts, state: { contracts } } = useContext(CondoAssociationContext);

  useEffect(() => {
    fetchContracts();
  }, []);

  const renderContracts = () => {
    if (contracts.length) {
      return contracts.map(({ id, name, description, budget, created_at }) => {
        return (
          <ContractCard
            key={id}
            id={id}
            name={name}
            description={description}
            budget={budget}
            created_at={created_at}
          />
        );
      });
    } else {
      return <div>No Contracts at the moment</div>;
    }
  };

  return (
    <>
      <CondoNav />
      <div style={{ padding: '30px' }}>
        <div className="page-header">
          <h1>Contracts</h1>
          <Link to="/condo-association/contracts/new">
            <div className="post-btn">Add Contract</div>
          </Link>
        </div>
        {renderContracts()}
      </div>
    </>
  );
};

export default Contracts;