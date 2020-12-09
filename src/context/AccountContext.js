import createDataContext from './createDataContext';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'start_loading': return { ...state, isLoading: true };
    case 'stop_loading': return { ...state, isLoading: false };
    case 'set_error': return { ...state, error: action.payload };
    case 'reset_error': return { ...state, error: '' };
    case 'set_success': return { ...state, success: action.payload };
    case 'reset_success': return { ...state, success: '' };
    case 'fetch_posts': return { ...state, posts: action.payload };
    case 'fetch_friends': return { ...state, requests: action.payload };
    case 'fetch_payments': return { ...state, payments: action.payload };
    case 'fetch_condos': return { ...state, condos: action.payload };
    case 'fetch_parking_spots': return { ...state, parkingSpots: action.payload };
    case 'fetch_storage_rooms': return { ...state, storageRooms: action.payload };
    default: return state;
  }
};

// Fetch Post
const fetchPosts = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get(''); // GET posts URL
    dispatch({ type: 'fetch_posts', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Add Friend
const sendFriendReq = dispatch => async ({ senderID, receiverEmail }) => {
  const REQUEST_ENDPOINT = 'http://localhost:8080/con/api/account/friends/sendRequest.php';
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'reset_success' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'post',
      url: REQUEST_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
      data: { senderID, receiverEmail }
    });
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_success', payload: 'sendFriendReq' });
    return response;
  }
  catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'sendFriendReq' });
  }
};

// Fetch Requests
const fetchRequests = dispatch => async ({ receiver_id }) => {
  const REQUESTS_ENDPOINT = 'http://localhost:8080/con/api/account/friends/getRequests.php'
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'reset_success' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'post',
      url: REQUESTS_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
      data: {receiver_id}
    });
    dispatch({ type: 'set_error' , payload: 'fetchRequests'});
    dispatch({ type: 'stop_loading' });
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'fetchRequests' });
  }
};

// Fetch Friends
const fetchFriends = dispatch => async ({ receiver_id }) => {
  const FRIENDS_ENDPOINT = 'http://localhost:8080/con/api/account/friends/getFriends.php'
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'reset_success' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'post',
      url: FRIENDS_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
      data: {receiver_id}
    });
    dispatch({ type: 'set_success' , payload: 'fetchFriends'});
    dispatch({ type: 'stop_loading' });
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'fetchFriends' });
  }
};

// Accept Friend Request
const acceptRequest = dispatch => async ({ sender_id, receiver_id }) => {
  const ACCEPT_ENDPOINT = 'http://localhost:8080/con/api/account/friends/accept.php'
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'put',
      url: ACCEPT_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
      data: {sender_id, receiver_id }
    });
    dispatch({ type: 'set_success' , payload: 'acceptFriendRequest'});
    dispatch({ type: 'stop_loading' });
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'acceptFriendRequest' });
  }
};

// Delete Friend or Friend Request
const deleteFriend = dispatch => async ({ sender_id, receiver_id }) => {
  const DELETE_ENDPOINT = 'http://localhost:8080/con/api/account/friends/delete.php'
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'delete',
      url: DELETE_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
      data: {sender_id, receiver_id }
    });
    dispatch({ type: 'set_success' , payload: 'deleteFriend'});
    dispatch({ type: 'stop_loading' });
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'deleteFriend' });
  }
};

// Fetch Payments
const fetchPayments = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get(''); // GET payments URL
    dispatch({ type: 'fetch_payments', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Pay Payment
const payPayment = dispatch => async ({ paymentId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.put('', { paymentId }); // PUT payments URL

    fetchPayments();
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Condos
const fetchCondos = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get(''); // GET condos URL
    dispatch({ type: 'fetch_condos', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Condo Detail
const fetchCondo = dispatch => async ({ condoId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const parkingSpotsResponse = await axios.get('', { params: { condoId } }); // GET parking spots URL
    dispatch({ type: 'fetch_parking_spots', payload: parkingSpotsResponse.data });
    const storageRoomsResponse = await axios.get('', { params: { condoId } }); // GET storage rooms URL
    dispatch({ type: 'fetch_storage_rooms', payload: storageRoomsResponse.data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

export const { Context, Provider } = createDataContext(
  reducer,
  { fetchPosts, fetchRequests, fetchFriends, acceptRequest, sendFriendReq, deleteFriend, fetchPayments, payPayment, fetchCondos, fetchCondo },
  { posts: [], friends: [], payments: [], condos: [], parkingSpots: [], storageRooms: [], isLoading: false, error: '', success:'' }
);