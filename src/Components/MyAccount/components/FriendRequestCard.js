import React from 'react';
import Spinner from '../../Global/Spinner'
import Box from '../../Global/Box';
import { Context as AccountContext } from '../../../context/AccountContext';

const FriendRequestCard = ({ id, requesterFName, requesterLName, date, callbackError, callbackSuccess }) => {
  const { acceptRequest, deleteFriend, state:{ error, success, isLoading } } = React.useContext(AccountContext);

  const acceptReq = async () => {
    acceptRequest({
      sender_id: id,
      receiver_id: localStorage.getItem('userid')
    })
  };

  const deleteReq = async () => {
    deleteFriend({
      sender_id: id,
      receiver_id: localStorage.getItem('userid')
    })
  };

  if(error==="deleteFriend"){
    callbackError('Couldn\'t reject request')
  }
  else if(success==="deleteFriend"){
    callbackSuccess('Request was rejected')
  }
  else if(error==="acceptFriendRequest"){
    callbackError('Couldn\'t accept request')
  }
  else if(success==="acceptFriendRequest"){
    callbackSuccess('Request was accepted')
  }

  return (
    <Box>
      <div className="card-info">
        <div className="friend-info">
          <div className="friend-name">{requesterFName + ' ' + requesterLName}</div>
          <div className="date">{date}</div>
        </div>
        <div className="friend-actions">
          <button className="post-btn" onClick={acceptReq}>Accept</button>
          <button className="post-btn del" onClick={deleteReq}>Reject</button>
        </div>
      </div>
    </Box>
  );
};

export default FriendRequestCard;