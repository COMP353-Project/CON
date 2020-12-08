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
    case 'register': return { ...state, user: action.payload };
    case 'signin': return { ...state, user: action.payload };
    case 'signout': return { ...state, user: null };
    case 'register': return { ...state, user: action.payload }
    default: return state;
  }
};


//======================= USERS =======================//
// Register
const registerUser = dispatch => async (data) => {
  const REGISTER_ENDPOINT = 'http://localhost:8080/con/api/users/register.php';
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'reset_success' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'post',
      url: REGISTER_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
      data: data
    });
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_success', payload: 'registerUser' });
    return response;
  }
  catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'registerUser' });
  }
};

// Promote
const promote = dispatch => async (data) => {
  const PROMOTE_ENDPOINT = 'http://localhost:8080/con/api/users/promote.php';
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'reset_success' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'put',
      url: PROMOTE_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
      data: data
    });
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_success', payload: 'promotionUser' });
    return response;
  }
  catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'promotionUser' });
  }
};

// Delete
const deleteUser = dispatch => async (data) => {
  const DELETE_ENDPOINT = 'http://localhost:8080/con/api/users/delete.php';
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'reset_success' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'delete',
      url: DELETE_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
      data: data
    });
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_success', payload: 'deleteUser' });
    return response;
  }
  catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'deleteUser' });
  }
};

// Sign In
const signin = dispatch => async ({ email, password }) => {
  const LOGIN_ENDPOINT = 'http://localhost:8080/con/api/users/login.php'
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    console.log('hello')
    const response = await axios.post(LOGIN_ENDPOINT, { email, password }); // POST Sign In URL

    if (response.status === 200 && response.data.jwt && response.data.expireAt) {
      dispatch({ type: 'signin', payload: response.data });
      localStorage.setItem('is_authenticated', true);
      localStorage.setItem('userid', response.data.id);
      localStorage.setItem('user', response.data);
      localStorage.setItem('admin', response.data.admin);
      dispatch({ type: 'stop_loading' });
      return response;
    }

  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Edit Profile
const editProfile = dispatch => async ({ firstName, lastName, address, password }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.put('', { firstName, lastName, address, password }); // PUT user URL
    dispatch({ type: 'signin', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Sign Out

const signout = dispatch => async () => {
  dispatch({ type: 'signout' });
  localStorage.setItem('is_authenticated', false);
  localStorage.removeItem('user');
};

//======================= GROUPS =======================//
// Delete Group

const deleteGroup = dispatch => async (data) => {
  const DELETE_ENDPOINT = 'http://localhost:8080/con/api/groups/delete.php';
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'reset_success' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'delete',
      url: DELETE_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
      data: data
    });
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_success', payload: 'deleteGroup' });
    return response;
  }
  catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'deleteGroup' });
  }
};

//======================= CONDO ASSOCIATIONS =======================//

// Register Condo Association

const registerCA = dispatch => async (data) => {
  const REGISTER_ENDPOINT = 'http://localhost:8080/con/api/associations/register.php';
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'reset_success' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'post',
      url: REGISTER_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
      data: data
    });
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_success', payload: 'registerCA' });
    return response;
  }
  catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'registerCA' });
  }
};

// Register User to Condo Association

const assignUser = dispatch => async (data) => {
  const ASSIGNMENT_ENDPOINT = 'http://localhost:8080/con/api/associations/assign.php';
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'reset_success' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'post',
      url: ASSIGNMENT_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
      data: data
    });
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_success', payload: 'assignCA' });
    return response;
  }
  catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'assignCA' });
  }
};

// Delete Condo Association

const deleteCA = dispatch => async (data) => {
  const DELETE_ENDPOINT = 'http://localhost:8080/con/api/associations/delete.php';
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'reset_success' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'delete',
      url: DELETE_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
      data: data
    });
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_success', payload: 'deleteCA' });
    return response;
  }
  catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'deleteCA' });
  }
};


export const { Context, Provider } = createDataContext(reducer, {
  registerUser, promote, deleteUser, signin, editProfile, deleteGroup, registerCA, assignUser, deleteCA, signout
}, { isLoading: false, error: '', success: '', user: null });