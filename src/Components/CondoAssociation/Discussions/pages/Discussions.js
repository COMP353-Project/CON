import '../css/Discussions.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import DiscussionCard from '../components/DiscussionCard';
import PostDiscussionButton from '../components/PostDiscussionButton';
import CondoNav from '../../CondoNav';

const discussions = [
  {
    id: 0,
    title: 'Discussion Title',
    author: 'Author\'s Name',
    date: 'January 12th 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    commentsLength: 12
  },
  {
    id: 1,
    title: 'Discussion Title',
    author: 'Author\'s Name',
    date: 'January 12th 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    commentsLength: 12
  },
  {
    id: 2,
    title: 'Discussion Title',
    author: 'Author\'s Name',
    date: 'January 12th 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    commentsLength: 12
  },
  {
    id: 3,
    title: 'Discussion Title',
    author: 'Author\'s Name',
    date: 'January 12th 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    commentsLength: 12
  }
];

const Discussions = () => {
  const renderDiscussions = () => {
    return discussions.map(({ id, title, author, date, description, commentsLength }) => {
      return (
        <Fragment key={id}>
          <div style={{ height: '15px' }} />
          <DiscussionCard
            id={id}
            title={title}
            author={author}
            date={date}
            description={description}
            commentsLength={commentsLength}
          />
        </Fragment>
      );
    });
  };
  
  return (
    <>
      <CondoNav />
      <div style={{ padding: '30px' }}>
        <div className="header-box">
          <h1>Discussions</h1>
          <Link to="/condo-association/discussions/new">
            <PostDiscussionButton />
          </Link>
        </div>
        {renderDiscussions()}
      </div>
    </>
  );
};

export default Discussions;