import createDataContext from './createDataContext';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'start_loading': return { ...state, isLoading: true };
    case 'stop_loading': return { ...state, isLoading: false };
    case 'set_error': return { ...state, error: action.payload };
    case 'reset_error': return { ...state, error: '' };
    case 'fetch_posts': return { ...state, posts: action.payload };
    case 'fetch_friends': return { ...state, requests: action.payload };
    case 'fetch_payments': return { ...state, payments: action.payload };
    case 'fetch_condos': return { ...state, condos: action.payload };
    case 'fetch_parking_spots': return { ...state, parkingSpots: action.payload };
    case 'fetch_storage_rooms': return { ...state, storageRooms: action.payload };
    case 'fetch_user': return { ...state, user: action.payload };
    default: return state;
  }
};

// Fetch User

const fetchUser = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get(`http://localhost:8080/CON/api/account/get_user.php?id=${localStorage.getItem('userid')}`);
    dispatch({ type: 'fetch_user', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Update Profile

const updateProfile = dispatch => async ({ firstName, lastName, email, address }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.put(
      'http://localhost:8080/CON/api/account/update_profile.php',
      { first_name: firstName, last_name: lastName, email, address, id: localStorage.getItem('userid') }
    );

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    console.log(e.message);
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Update Password

const updatePassword = dispatch => async ({ currentPassword, newPassword, confirmNewPassword }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    if (newPassword !== confirmNewPassword) throw new Error('Passwords must match');

    const response = await axios.put(
      'http://localhost:8080/CON/api/account/update_password.php',
      { id: localStorage.getItem('userid'), current_password: currentPassword, new_password: newPassword }
    );

    console.log(response);

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    console.log(e.message);
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Posts

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

// Fetch Friends + Requests

const fetchFriends = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get(''); // GET friends URL
    dispatch({ type: 'fetch_friends', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Friend Request Action

const handleRequest = dispatch => async ({ requestSenderId, accept }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.put('', { requestSenderId, accept }); // PUT friend_request URL
    
    fetchFriends();
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Add Friend

const addFriend = dispatch => async ({ userEmail }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.post('', { userEmail }); // POST friend_request URL

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Delete Friend

const deleteFriend = dispatch => async ({ friendId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.delete('', { friendId }); // DELETE friend URL

    fetchFriends();
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
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
  { fetchPosts, fetchFriends, handleRequest, addFriend, deleteFriend, fetchPayments, payPayment, fetchCondos,
    fetchCondo, fetchUser, updateProfile, updatePassword },
  { posts: [], friends: [], payments: [], condos: [], parkingSpots: [], storageRooms: [], isLoading: false, error: '', user: {} }
);