import '../css/Profile.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import DiscussionCard from '../../CondoAssociation/Discussions/components/DiscussionCard';
import AdCard from '../../CondoAssociation/Ads/components/AdCard';
import '../../../css/GlobalStyles.css';

const user = {
  id: 0,
  name: 'User Name',
  email: 'email@email.com',
  address: '1111 Street, City, State, Country'
};

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
  }
];

const ads = [
  {
    id: 0,
    title: 'Ad Title',
    price: 199.99,
    author: 'Author Name',
    date: 'January 12th 2020',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  },
  {
    id: 1,
    title: 'Ad Title',
    price: 199.99,
    author: 'Author Name',
    date: 'January 12th 2020',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
  }
];

const Profile = () => {
  const renderDiscussions = () => {
    return discussions.map(({ id, title, author, date, description, commentsLength }) => {
      return (
        <Fragment key={id}>
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

  const renderAds = () => {
    return ads.map(({ id, title, price, author, date, description }) => {
      return (
        <Fragment key={id}>
          <AdCard
            id={id}
            title={title}
            price={price}
            author={author}
            date={date}
            description={description}
          />
        </Fragment>
      );
    });
  };

  return (
    <div>
      <div className="page-header">
        <h1>{user.name}</h1>
        <div className="buttons-box">
          <Link to="/my-account/edit">
            <Button title="Edit Profile" />
          </Link>
        </div>
      </div>
      <div className="info"><span className="label">Email Address:</span><div className="space" />{user.email}</div>
      <div className="info"><span className="label">Address:</span><div className="space" />{user.address}</div>
      <h2>Discussion Posts</h2>
      {renderDiscussions()}
      <h2>Ads Posted</h2>
      {renderAds()}
      <h2>Group Posts</h2>
    </div>
  );
};

export default Profile;