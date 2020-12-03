import '../../../../css/GlobalStyles.css';
import React, { useState } from 'react';
import OptionCard from './OptionCard';

const config = {
  poll: { type: 'Poll', option: 'Options' },
  election: { type: 'Election', option: 'Candidates' }
};

const VoteForm = ({ isElection }) => {
  const [optionName, setOptionName] = useState('');
  const [optionDescription, setOptionDescription] = useState('');
  const [options, setOptions] = useState([]);

  const { type, option } = isElection ? config.election : config.poll;

  const renderOptions = () => {
    if (options.length === 0) return <div>There are no current {option}</div>;

    return options.map(({ id, name, description }) => {
      return (
        <OptionCard
          key={id}
          name={name}
          description={description}
          onDelete={() => {
            let newOptions = options;
            newOptions.splice(id, 1);
            setOptions([...newOptions]);
          }}
        />
      );
    });
  };

  return (
    <div>
      <form className="ui form">
        <h2>{type} Info</h2>
        <div className="field">
          <label>Title</label>
          <input type="text" placeholder="Title" />
        </div>
        <div className="field">
          <label>Deadline</label>
          <div className="fields">
            <div className="six wide field">
              <input type="number" placeholder="DD" />
            </div>
            <div className="six wide field">
              <input type="number" placeholder="MM" />
            </div>
            <div className="six wide field">
              <input type="number" placeholder="YYYY" />
            </div>
          </div>
        </div>
        <div className="field">
          <label>Description</label>
          <textarea rows="5" cols="2" placeholder="Description" />
        </div>
        <h2>{option}</h2>
        <div className="field">
          <h3>Current {option}</h3>
          {renderOptions()}
        </div>
        <div className="field">
          <label>Name</label>
          <input type="text" placeholder="Name" value={optionName} onChange={e => setOptionName(e.target.value)} />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea
            rows="3"
            cols="1"
            placeholder="Description"
            value={optionDescription}
            onChange={e => setOptionDescription(e.target.value)}
          />
        </div>
        <div
          className="post-btn"
          onClick={() => {
            const newOption = { id: options.length, name: optionName, description: optionDescription };
            setOptions([...options, newOption]);
            setOptionName('');
            setOptionDescription('');
          }}
        >
          Add {option}
        </div>
      </form>
    </div>
  );
};

export default VoteForm;