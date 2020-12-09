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
    default: return state;
  }
};

// Sign In
const signin = dispatch => async ({ email, password }) => {
  const LOGIN_ENDPOINT = 'http://localhost/CON/con/api/users/login.php'
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
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

export const { Context, Provider } = createDataContext(reducer, {
  signin, editProfile, signout
}, { isLoading: false, error: '', success: '', user: null });