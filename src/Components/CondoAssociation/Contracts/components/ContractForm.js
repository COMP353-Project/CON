import React, { useState, useContext } from 'react';
import BackButton from '../../../Global/BackButton';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';
import { useHistory } from 'react-router-dom';

const ContractForm = () => {
  const history = useHistory();
  const { createContract } = useContext(CondoAssociationContext);
  
  const [name, setName] = useState('');
  const [budget, setBudget] = useState(0);
  const [description, setDescription] = useState('');

  return (
    <>
      <div className="page-container">
        <div>
          <BackButton />
        </div>
        <div className="page-header">
          <h1>Post Contract</h1>
          <div
            className="post-btn"
            onClick={async () => {
              await createContract({ name, description, budget });
              history.goBack();
            }}
          >
            Post Contract
          </div>
        </div>
        <div className="ui form">
          <div className="ui field">
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Contract Name" />
          </div>
          <div className="ui field">
            <input value={budget} onChange={e => setBudget(e.target.value)} type="number" placeholder="Contract Budget" />
          </div>
          <div className="ui field">
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows="5" cols="1" placeholder="Contract Description" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractForm;