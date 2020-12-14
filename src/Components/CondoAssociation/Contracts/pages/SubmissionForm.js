import React, { useState, useContext } from 'react';
import BackButton from '../../../Global/BackButton';
import CondoNav from '../../CondoNav';
import { Context as CondoAssociation } from '../../../../context/CondoAssociationContext';
import { useParams, useHistory } from 'react-router-dom';

const PostSubmission = () => {
  const history = useHistory();
  const { id } = useParams();
  const { addSubmission } = useContext(CondoAssociation);

  const [poster, setPoster] = useState('');
  const [statement, setStatement] = useState('');

  return (
    <>
      <CondoNav />
      <div className="page-container">
        <BackButton />
        <div className="page-header">
          <h1>Post Submission</h1>
          <div
            className="post-btn"
            onClick={async () => {
              await addSubmission({ contract_id: id, poster, statement });
              history.goBack();
            }}
          >
            Add Submission</div>
        </div>
        <form className="ui form">
          <div className="ui field">
            <label>Poster Name</label>
            <input value={poster} onChange={e => setPoster(e.target.value)} type="text" placeholder="Poster Name" />
          </div>
          <div className="ui field">
            <label>Statement</label>
            <textarea value={statement} onChange={e => setStatement(e.target.value)} rows="5" cols="1" placeholder="Statement" />
          </div>
        </form>
      </div>
    </>
  );
};

export default PostSubmission;