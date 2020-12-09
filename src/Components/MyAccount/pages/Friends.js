import React, { Fragment } from 'react';
import Spinner from '../../Global/Spinner'
import FriendRequestCard from '../components/FriendRequestCard';
import FriendCard from '../components/FriendCard';
import '../css/Friends.css'
import { Context as AccountContext } from '../../../context/AccountContext';

const friendRequests = [
  { id: 0, requesterName: 'John Gerts', date: 'January 1th 2020' },
  { id: 1, requesterName: 'Rachel Vicker', date: 'January 7th 2020' },
  { id: 2, requesterName: 'Samuel Tolloni', date: 'January 12th 2020' },
];

const friends = [
  { id: 0, friendName: 'Person Name', date: 'January 12th 2020' },
  { id: 1, friendName: 'Person Name', date: 'January 12th 2020' },
  { id: 2, friendName: 'Person Name', date: 'January 12th 2020' },
  { id: 3, friendName: 'Person Name', date: 'January 12th 2020' },
  { id: 4, friendName: 'Person Name', date: 'January 12th 2020' },
];

const Friends = () => {
  const [email, setEmail] = React.useState("");
  const { sendFriendReq, state:{ error, success, isLoading } } = React.useContext(AccountContext);

  const handleFriendReq = async (e) => {
    e.preventDefault();

    sendFriendReq({
      senderID: localStorage.getItem('userid'),
      receiverEmail: email
    });

    // Reset form values
    setEmail('');
  }


  const renderFriendRequests = () => {
    return friendRequests.map(({ id, requesterName, date }) => {
      return (
        <Fragment key={id}>
          <FriendRequestCard
            id={id}
            requesterName={requesterName}
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
      <form className="friend-add" onSubmit={handleFriendReq}>
        <input type="text"
          id="send-friend-req"
          class="friend-field"
          placeholder="Enter User Email"
          onChange={e => setEmail(e.target.value)}
        />
        {isLoading ? <Spinner/> : <input type="submit" value="Add Friend" className="post-btn"/>}
      </form>
      {error === "sendFriendReq" && <p className="is-error primary">Error sending request</p>}
      {success === "sendFriendReq" && <p className="is-success">Friend request sent</p>}
      <div className="friend-manage">
        <div>
          <h2>Requests</h2>
          {renderFriendRequests()}
        </div>
        <div>
          <h2>Friends</h2>
          {renderFriends()}
        </div>
      </div>

    </div>
  );
};

export default Friends;