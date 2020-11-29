import createDataContext from './createDataContext';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'start_loading': return { ...state, isLoading: true };
    case 'stop_loading': return { ...state, isLoading: false };
    case 'set_error': return { ...state, error: action.payload };
    case 'reset_error': return { ...state, error: '' };
    case 'signin': return { ...state, user: action.payload };
    case 'signout': return { ...state, user: null };
    default: return state;
  }
};

// Sign In

const signin = dispatch => async ({ email, password }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.post('', { email, password }); // POST Sign In URL
    dispatch({ type: 'signin', payload: data });
    localStorage.setItem('user', data);

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

const login = dispatch => async ({ email, password }) => {
  const LOGIN_ENDPOINT = 'http://localhost/con/CON/api/login.php'
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.post(LOGIN_ENDPOINT, { email, password }); // POST Sign In URL
    dispatch({ type: 'signin', payload: data });
    localStorage.setItem('user', data);

    dispatch({ type: 'stop_loading' });
    history.push('/private-homepage');
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
  localStorage.removeItem('user');
};

export const { Context, Provider } = createDataContext(reducer, {
  signin, editProfile, signout
}, { isLoading: false, error: '', user: null });