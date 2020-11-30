import React, { Fragment } from 'react';
import Button from '../components/Button';
import FriendRequestCard from '../components/FriendRequestCard';
import FriendCard from '../components/FriendCard';

const friendRequests = [
  { id: 0, from: 'Person Name', date: 'January 12th 2020' },
  { id: 1, from: 'Person Name', date: 'January 12th 2020' },
  { id: 2, from: 'Person Name', date: 'January 12th 2020' },
];

const friends = [
  { id: 0, friendName: 'Person Name', date: 'January 12th 2020' },
  { id: 1, friendName: 'Person Name', date: 'January 12th 2020' },
  { id: 2, friendName: 'Person Name', date: 'January 12th 2020' },
  { id: 3, friendName: 'Person Name', date: 'January 12th 2020' },
  { id: 4, friendName: 'Person Name', date: 'January 12th 2020' },
];

const Friends = () => {
  const renderFriendRequests = () => {
    return friendRequests.map(({ id, from, date }) => {
      return (
        <Fragment key={id}>
          <div style={{ height: '10px' }} />
          <FriendRequestCard
            id={id}
            from={from}
            date={date}
          />
        </Fragment>
      );
    });
  };

  const renderFriends = () => {
    return friends.map(({ id, friendName, date }) => {
      return (
        <Fragment key={id}>
          <div style={{ height: '10px' }} />
          <FriendCard
            id={id}
            friendName={friendName}
            date={date}
          />
        </Fragment>
      );
    });
  };

  return (
    <div>
      <div className="field" style={{ display: 'flex', flexDirection: 'row' }}>
        <input type="text" placeholder="Enter User Email" style={{
          flex: 1, border: 'none', backgroundColor: '#EAEAEA', paddingLeft: '10px', paddingRight: '10px'
        }} />
        <div style={{ width: '10px' }} />
        <Button title="Add Friend" />
      </div>
      <h2>Requests</h2>
      {renderFriendRequests()}
      <h2>Friends</h2>
      {renderFriends()}
    </div>
  );
};

export default Friends;