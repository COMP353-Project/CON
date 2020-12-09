import React from 'react';
import Spinner from '../../Global/Spinner'
import Box from '../../Global/Box';
import { Context as AccountContext } from '../../../context/AccountContext';

const FriendCard = ({ id, friendFName, friendLName, date, callbackError, callbackSuccess}) => {
  const { deleteFriend, state:{ error, success, isLoading } } = React.useContext(AccountContext);

  const deleteReq = () => {
    deleteFriend({
      sender_id: id,
      receiver_id: localStorage.getItem('userid')
    })
  };

  if(error==="deleteFriend"){
    callbackError('Couldn\'t delete friend')
  }

  else if(success==="deleteFriend"){
    callbackSuccess('Friend was removed')
  }

  return (
    <Box>
      <div className="card-info" data-id={id}>
        <div className="friend-info">
          <div className="friend-name">{friendFName + ' ' + friendLName}</div>
          <div className="date">{date}</div>
        </div>
        <button className="post-btn del" onClick={deleteReq}>Remove</button>
      </div>
    </Box>

  );
};

export default FriendCard;
