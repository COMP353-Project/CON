import createDataContext from './createDataContext';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'start_loading': return { ...state, isLoading: true };
    case 'stop_loading': return { ...state, isLoading: false };
    case 'set_error': return { ...state, error: action.payload };
    case 'reset_error': return { ...state, error: '' };
    case 'register': return { ...state, user: action.payload };
    case 'signin': return { ...state, user: action.payload };
    case 'signout': return { ...state, user: null };
    default: return state;
  }
};

// Register

const register = dispatch => async ({ first_name, last_name, email, password, address }) => {
  const REGISTER_ENDPOINT = 'http://localhost:8080/con/api/register.php'
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios.post(
      REGISTER_ENDPOINT,
      { first_name, last_name, email, password, address }
      // {headers : {'X-Requested-With': 'XMLHttpRequest'} }
    );
    console.log(response);
    if (response.status === 200){
      dispatch({ type: 'stop_loading' });
      return response;
    }

  } catch (e) {
    console.log(e.message)
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// const register = async (data) => {
//   const REGISTER_ENDPOINT = 'http://localhost/con/CON/api/register.php';

//   try {
//       let response = await axios({
//           method: 'post',
//           responseType: 'json',
//           url: REGISTER_ENDPOINT,
//           data: data
//       });
//   } catch (e) {
//       console.log(e);
//       console.log('registration error');
//   }
// }

// Sign In

const signin = dispatch => async ({ email, password }) => {
  const LOGIN_ENDPOINT = 'http://localhost:8080/con/api/login.php'
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios.post(LOGIN_ENDPOINT, { email, password }); // POST Sign In URL

    if (response.status === 200 && response.data.jwt && response.data.expireAt) {
      dispatch({ type: 'signin', payload: response.data });
      localStorage.setItem('is_authenticated', true);
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

// const login = async (data) => {

//   const LOGIN_ENDPOINT = 'http://localhost/con/CON/api/login.php';

//   try {
//       let response = await axios.post(
//           LOGIN_ENDPOINT,
//           data,
//       );

//       if (response.status === 200 && response.data.jwt && response.data.expireAt) {

//           let jwt = response.data.jwt;
//           let expire_at = response.data.expireAt;

//           localStorage.setItem("access_token", jwt);
//           localStorage.setItem("expire_at", expire_at);
//           localStorage.setItem("is_authenticated", true);
//           return response.data;
//       }
//   } catch (e) {
//       console.log('login error')
//       console.log(e)
//   }
// }

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
  register, signin, editProfile, signout
}, { isLoading: false, error: '', user: null });