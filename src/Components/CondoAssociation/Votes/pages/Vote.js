import '../css/VotesStyles.css';
import '../../../../css/GlobalStyles.css';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../../CondoNav';
import BackButton from '../../../Global/BackButton';
import Box from '../../../Global/Box';

const options = [
  {
    id: 0,
    name: 'Option Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 1,
    name: 'Option Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 2,
    name: 'Option Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 3,
    name: 'Option Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
];

const Vote = () => {
  const { id } = useParams();

  const renderOptions = () => {
    return options.map(({ id, name, description }) => {
      return (
        <div className="field" key={id}>
          <div className="ui radio checkbox">
            <input type="radio" checked="" tabindex="0" />
            <label>
              <div className="option-name">{name}</div>
              <div style={{ height: '8' }} />
              <div className="option-description">{description}</div>
            </label>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Nav />
      <div className="page-container">
        <div className="page-header">
          <BackButton />
          <div className="post-btn">Submit</div>
        </div>
        <Box>
          <div className="header-container">
            <div className="card-info">
              <h3 className="card-title">Vote Title</h3>
            </div>
            <Link to={`/condo-association/votes/${id}/edit`}>
                <div className="details-button">Edit</div>
            </Link>
          </div>
          <div style={{ height: '10px' }} />
          <div className="row">
            <div className="info-label horizontal-separator small vertical-separator small">Deadline:</div>
            <div className="card-date">January 12th 2020</div>
          </div>
          <div style={{ height: '10px' }} />
          <div className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div style={{ height: '10px' }} />
          <form className="ui form">
            {renderOptions()}
          </form>
        </Box>
      </div>
    </>
  );
};

export default Vote;