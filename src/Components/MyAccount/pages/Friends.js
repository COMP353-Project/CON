import React, { Fragment } from 'react';
import Spinner from '../../Global/Spinner'
import FriendRequestCard from '../components/FriendRequestCard';
import FriendCard from '../components/FriendCard';
import '../css/Friends.css'
import { Context as AccountContext } from '../../../context/AccountContext';
import { Context as AdminContext } from '../../../context/AdminContext';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Friends = () => {
  const [emails, setEmails] = React.useState([]);
  const [requestsError, setRError] = React.useState("");
  const [requestsSuccess, setRSuccess] = React.useState("");
  const [friendsError, setFError] = React.useState("");
  const [friendsSuccess, setFSuccess] = React.useState("");
  const [requests, setRequests] = React.useState([]);
  const [friends, setFriends] = React.useState([]);
  const [emailValue, setEmailValue] = React.useState('');
  const [emailInputValue, setEmailInputValue] = React.useState('');
  const { sendFriendReq, fetchRequests, fetchFriends, state: { error, success, isLoading } } = React.useContext(AccountContext);
  const { fetchUsers } = React.useContext(AdminContext);

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
    getUsers();
  }, []);

  const getRequests = async () => {
    setRequests(await fetchRequests({ receiver_id: localStorage.getItem('userid') }
    ));
  };

  const getFriends = async () => {
    setFriends(await fetchFriends({ receiver_id: localStorage.getItem('userid') }
    ));
  };

  const getUsers = async () => {
    setEmails(await fetchUsers());
  };

  const sendReq = async (e) => {
    e.preventDefault();

    sendFriendReq({
      senderID: localStorage.getItem('userid'),
      receiverEmail: emailInputValue
    });

    // Reset form values
    setEmailValue('');
  }

  const RenderRequests = () => {
    if (requests) {
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
    if (friends) {
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
        <Autocomplete
          className="friend-field"
          options={emails ? emails : []}
          noOptionsText={emails ? 'Cannot find that user' : 'No users exist'}
          id="email"
          renderOption={(option) => (
            <React.Fragment>
              <div className='dropdown-label'>
                <span className='name'>{option.first_name} {option.last_name}</span>
                <span className='email'>{option.email}</span>
              </div>
            </React.Fragment>
          )}
          value={emailValue}
          onChange={(event, newValue) => {
            setEmailValue(newValue)
          }}
          inputValue={emailInputValue}
          onInputChange={(event, newInputValue) => {
            setEmailInputValue(newInputValue);
          }}
          getOptionLabel={(option) => option.email}
          renderInput={(params) => <TextField {...params} required type="email" label="Select User" id="send-friend-req" variant="outlined" />}
        />
        {isLoading ? <Spinner /> : <input type="submit" value="Add Friend" className="post-btn" />}
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
          <RenderRequests />
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
