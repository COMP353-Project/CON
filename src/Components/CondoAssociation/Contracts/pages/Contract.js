import React, { useContext, useEffect } from 'react';
import BackButton from '../../../Global/BackButton';
import Box from '../../../Global/Box';
import CondoNav from '../../CondoNav';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';
import { useParams, Link, useHistory } from 'react-router-dom';

const Contract = () => {
  const history = useHistory();
  const { fetchContract, deleteContract, state: { contract: { contract, submissions } } } = useContext(CondoAssociationContext);
  const { id } = useParams();

  const renderSubmissions = () => {
    if (submissions && submissions.length) {
      return submissions.map(({ id, poster, statement }) => {
        return (
          <div key={id} className="card-comment">
            <div className="card-author">{poster}</div>
            <div style={{ height: '10px' }} />
            <div className="card-description">{statement}</div>
          </div>
        );
      });
    } else {
      return <div>No Submissions</div>;
    }
  };

  useEffect(() => {
    fetchContract({ id });
  }, []);

  return (
    <>
      <CondoNav />
      <div className="page-container">
        <div className="page-header">
          <BackButton />
          <Link to={`/condo-association/contracts/${id}/submissions/new`}>
            <div className="post-btn">Add Submission</div>
          </Link>
        </div>
        <Box>
          <div className="page-header">
            <div className="card-info">
              <h3 className="card-title">{contract ? contract.name : '' }</h3>
              <div className="card-price">{contract ? contract.budget : ''}</div>
              <div className="card-date">{contract ? contract.created_at : ''}</div>
            </div>
            <div
              className="del-plain"
              onClick={async () => {
                await deleteContract({ id });
                history.goBack();
              }}
            >
              Delete Contract
            </div>
          </div>
          <div className="card-description">{contract ? contract.description : '' }</div>
          <div style={{ height: '30px' }} />
          <div className="card-title">Submissions</div>
          {renderSubmissions()}
        </Box>
      </div>
    </>
  );
};

export default Contract;