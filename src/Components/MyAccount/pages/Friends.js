import React, { Fragment } from 'react';
import Spinner from '../../Global/Spinner'
import FriendRequestCard from '../components/FriendRequestCard';
import FriendCard from '../components/FriendCard';
import '../css/Friends.css'
import { Context as AccountContext } from '../../../context/AccountContext';

const Friends = () => {
  const [email, setEmail] = React.useState("");
  const [requestsError, setRError] = React.useState("");
  const [requestsSuccess, setRSuccess] = React.useState("");
  const [friendsError, setFError] = React.useState("");
  const [friendsSuccess, setFSuccess] = React.useState("");
  const [requests, setRequests] = React.useState([]);
  const [friends, setFriends] = React.useState([]);
  const { sendFriendReq, fetchRequests, fetchFriends, state:{ error, success, isLoading } } = React.useContext(AccountContext);

  const getRequestsError = (errorFromChild) => {
    setRError(errorFromChild)
  }

  const getRequestsSuccess = (successFromChild) => {
    setRSuccess(successFromChild)
  }

  const getFriendsError = (errorFromChild) => {
    setFError(errorFromChild)
  }

  const getFriendsSuccess = (successFromChild) => {
    setFSuccess(successFromChild)
  }

  React.useEffect(() => {
    getRequests();
    getFriends();
  }, []);

  const getRequests = async () => {
    setRequests(await fetchRequests({ receiver_id: localStorage.getItem('userid') }
    ));
  };

  const getFriends = async () => {
    setFriends(await fetchFriends({ receiver_id: localStorage.getItem('userid') }
    ));
    
  };

  const sendReq = async (e) => {
    e.preventDefault();

    sendFriendReq({
      senderID: localStorage.getItem('userid'),
      receiverEmail: email
    });

    // Reset form values
    setEmail('');
  }

  const RenderRequests = () => {
    if(requests) {
      return requests.map(({ sender_id, first_name, last_name, created_at }) => {
        return (
          <Fragment key={sender_id}>
            <FriendRequestCard
              id={sender_id}
              requesterFName={first_name}
              requesterLName={last_name}
              date={created_at}
              callbackError={getRequestsError}
              callbackSuccess={getRequestsSuccess}
            />
          </Fragment>
        );
      });
    }
    else {
      return (
        <div className="friend-empty">No friend requests!</div>
      );
    }
  };

  const RenderFriends = () => {
    if(friends) {
      return friends.map(({ sender_id, receiver_id, first_name, last_name, created_at }) => {
        const id = sender_id === localStorage.getItem('userid') ? receiver_id : sender_id;
        return (
          <Fragment key={id}>
            <FriendCard
              id={id}
              friendFName={first_name}
              friendLName={last_name}
              date={created_at}
              callbackError={getFriendsError}
              callbackSuccess={getFriendsSuccess}
            />
          </Fragment>
        );
      });
    }
    else {
      return (
        <div className="friend-empty">No friends!</div>
      );     
    }

  };

  return (
    <div>
      <form className="friend-add" onSubmit={sendReq}>
        <input type="text"
          id="send-friend-req"
          className="friend-field"
          placeholder="Enter User Email"
          onChange={e => setEmail(e.target.value)}
        />
        {isLoading ? <Spinner/> : <input type="submit" value="Add Friend" className="post-btn"/>}
      </form>
      {error === "sendFriendReq" && <p className="is-error primary">Error sending request</p>}
      {success === "sendFriendReq" && <p className="is-success">Friend request sent</p>}
      <div className="friend-manage">
        <div>
          <div className="friends-header">
            <h2>Requests</h2>
            {requestsSuccess && <div className="is-success bold">{requestsSuccess}</div>}
            {requestsError && <div className="is-error bold">{requestsError}</div>}
          </div>
          <RenderRequests/>
        </div>
        <div>
          <div className="friends-header">
            <h2>Friends</h2>
            {friendsSuccess && <div className="is-success bold">{friendsSuccess}</div>}
            {friendsError && <div className="is-error bold">{friendsError}</div>}
          </div>
          <RenderFriends />
        </div>
      </div>

    </div>
  );
};

export default Friends;
