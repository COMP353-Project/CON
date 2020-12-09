import React, { Fragment } from 'react';
import Spinner from '../../Global/Spinner'
import FriendRequestCard from '../components/FriendRequestCard';
import FriendCard from '../components/FriendCard';
import '../css/Friends.css'
import { Context as AccountContext } from '../../../context/AccountContext';

const Friends = () => {
  const [email, setEmail] = React.useState("");
  const [requests, setRequests] = React.useState([]);
  const [friends, setFriends] = React.useState([]);

  const { sendFriendReq, fetchRequests, fetchFriends, state:{ error, success, isLoading } } = React.useContext(AccountContext);


  const getRequests = async () => {
    setRequests(await fetchRequests({ receiver_id: localStorage.getItem('userid') }
    ));
  };

  const getFriends = async () => {
    setFriends(await fetchFriends({ receiver_id: localStorage.getItem('userid') }
    ));
  };

  React.useEffect(() => {
    getRequests();
    getFriends();
  }, []);

  const handleFriendReq = async (e) => {
    e.preventDefault();

    sendFriendReq({
      senderID: localStorage.getItem('userid'),
      receiverEmail: email
    });

    // Reset form values
    setEmail('');
  }

  const renderRequests = () => {
    if(requests) {
      return requests.map(({ id, first_name, last_name, created_at }) => {
        return (
          <Fragment key={id}>
            <FriendRequestCard
              requesterFName={first_name}
              requesterLName={last_name}
              date={created_at}
            />
          </Fragment>
        );
      });
    }
    else {
      return (
        <div>No friend requests!</div>
      );
    }
  };

  const renderFriends = () => {
    if(friends) {
      return friends.map(({ id, first_name, last_name, created_at }) => {
        return (
          <Fragment key={id}>
            <FriendCard
              friendFName={first_name}
              friendLName={last_name}
              date={created_at}
            />
          </Fragment>
        );
      });
    }
    else {
      return (
        <div>No friends!</div>
      );     
    }

  };

  return (
    <div>
      <form className="friend-add" onSubmit={handleFriendReq}>
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
          <h2>Requests</h2>
          {renderRequests()}
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


// const RenderAds = () => {
//   return ads.map(({ condo_assoc_post_id, title, description, price, contact_number, first_name, last_name, created_at }) => {
//     return (
//       <Fragment key={id}>
//       <Fragment key={condo_assoc_post_id}>
//         <AdCard
//           id={id}
//           condo_assoc_post_id={condo_assoc_post_id}
//           title={title}
//           price={price}
//           author={author}
//           date={date}
//           first_name={first_name + ' ' + last_name}
//           created_at={created_at}
//           description={description}
//         />
//       </Fragment>
//     );
//   });
// };
// }

// React.useEffect(() => {
//   getAds();
// }, []);