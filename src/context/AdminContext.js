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
    default: return state;
  }
};

// Register User
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

// fetch users
const fetchUsers = dispatch => async () => {
  const PROMOTE_ENDPOINT = 'http://localhost:8080/con/api/users/users.php';
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'reset_success' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'get',
      url: PROMOTE_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
    });
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_success', payload: 'fetchUsers' });
    return response.data;
  }
  catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'fetchUsers' });
  }
};

// Promote User
const promoteUser = dispatch => async (data) => {
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
    dispatch({ type: 'set_success', payload: 'promoteUser' });
    return response;
  }
  catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'promoteUser' });
  }
};

// Delete User
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

// Delete Condo Association
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

// Delete Condo Association
const createAdminPost = dispatch => async (data) => {
  const POST_ENDPOINT = 'http://localhost:8080/con/api/associations/createAdminPost.php';
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'reset_success' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'post',
      url: POST_ENDPOINT,
      headers: {
        'content-type': 'application/json'
      },
      data: data
    });
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_success', payload: 'createAdminPost' });
    return response;
  }
  catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: 'createAdminPost' });
  }
};

export const { Context, Provider } = createDataContext(reducer, {
  registerUser, promoteUser, deleteUser, deleteGroup, registerCA, assignUser, deleteCA, fetchUsers, createAdminPost
}, { isLoading: false, error: '', success: '', user: null });