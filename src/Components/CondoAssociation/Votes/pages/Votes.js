import Nav from '../../CondoNav';
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import VoteCard from '../components/VoteCard';
import PostVoteButton from '../components/PostVoteButton'
import '../css/VoteStyles.css';

const votes = [
  {
    id: 0,
    type: 'poll',
    title: 'Poll Vote 1',
    deadline: 'January 11th 2020',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  },
  {
    id: 1,
    type: 'poll',
    title: 'Poll Vote 2',
    deadline: 'January 11th 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    type: 'election',
    title: 'Election Vote 1',
    deadline: 'January 11th 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    type: 'election',
    title: 'Election Vote 2',
    deadline: 'January 11th 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 4,
    type: 'election',
    title: 'Election Vote 3',
    deadline: 'January 11th 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
];

function CondoVotes () {
  const [pollsSelected, setPollsSelected] = useState(true);

  const selectPolls = () => {
    setPollsSelected(true);
  }
  const selectElections = () => {
    setPollsSelected(false)
  }

  const renderVotes = () => {
    return votes.map(({ id, type, title, deadline, description }) => {
      return (
        <Fragment key={id}>
          <VoteCard
            id={id}
            type={type}
            title={title}
            deadline={deadline}
            description={description}
          />
        </Fragment>
      );
    });
  };

  return (
    <div>
      <Nav />

      <div className={pollsSelected ? 'page-container poll' : 'page-container election'}>
        <div className="page-header">
          <h1>Votes (hardcoded)</h1>
          <Link to="/condo-association/Votes/new">
            <PostVoteButton />
          </Link>
        </div>
        <div className="subnav">
          <Button color="inherit" onClick={selectPolls} className={pollsSelected ? 'selected' : 'hidden'}>Polls</Button>
          <Button color="inherit" onClick={selectElections} className={pollsSelected ? 'hidden' : 'selected'}>Elections</Button>
        </div>
        {renderVotes()}
      </div>
    </div>
  );
}

export default CondoVotes;
