import React from 'react';
import Nav from './AdminNav';
import './AdminStyles.css';
import TextField from '@material-ui/core/TextField';
import Spinner from '../Global/Spinner';
import { Context as AdminContext } from '../../context/AdminContext';
import Autocomplete from '@material-ui/lab/Autocomplete';

function AdminUsers () {
  const { fetchUsers, registerUser, promoteUser, deleteUser, state: { error, success, isLoading } } = React.useContext(AdminContext);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [regEmail, setRegEmail] = React.useState("");
  const [regAddress, setRegAddress] = React.useState("");
  const [regPassword, setRegPassword] = React.useState("");
  const [emails, setEmails] = React.useState([]);
  const [promoteValue, setPromoteValue] = React.useState('');
  const [promoteInputValue, setPromoteInputValue] = React.useState('');
  const [deleteValue, setDeleteValue] = React.useState('');
  const [deleteInputValue, setDeleteInputValue] = React.useState('');

  /**
  * Function that fetches a list of user emails
  */
  const getUsers = async () => {
    setEmails(await fetchUsers());
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  /**
   * Function that handles user registration
   * @param {*} e 
   */
  const handleRegister = async (e) => {
    e.preventDefault();
    const info = {
      first_name: firstName,
      last_name: lastName,
      email: regEmail,
      address: regAddress,
      password: regPassword
    }

    registerUser(info);

    // Reset form promoteValues
    setFirstName('');
    setLastName('');
    setRegEmail('');
    setRegAddress('');
    setRegPassword('');
  }

  /**
   * Function that handles user registration
   * @param {*} e 
   */
  const handlePromotion = async (e) => {
    e.preventDefault();
    const info = {
      // email: promoteEmail
      email: promoteInputValue
    }
    promoteUser(info);

    // Reset form promoteValues
    setPromoteInputValue('');
  }

  /**
   * Function that handles user registration
   * @param {*} e 
   */
  const handleDelete = async (e) => {
    e.preventDefault();
    const info = {
      email: deleteInputValue
    }
    deleteUser(info);

    // Reset form promote values
    setDeleteInputValue('');
  }

  return (
    <div>
      <Nav />
      <div className="container--admin">
        <form onSubmit={handleRegister} className="container--form">
          <h3 className="form__title">Register new user</h3>

          <div className="form__field">
            <TextField
              id="register-user-fname"
              label="First Name"
              type="text"
              variant="outlined"
              value={firstName}
              required
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="form__field">
            <TextField
              id="register-user-lname"
              label="Last Name"
              type="text"
              variant="outlined"
              value={lastName}
              required
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="form__field">
            <TextField
              id="register-user-email"
              label="Email"
              type="email"
              variant="outlined"
              value={regEmail}
              required
              onChange={e => setRegEmail(e.target.value)}
            />
          </div>
          <div className="form__field">
            <TextField
              id="register-user-address"
              label="Address"
              type="text"
              variant="outlined"
              value={regAddress}
              required
              onChange={e => setRegAddress(e.target.value)}
            />
          </div>
          <div className="form__field">
            <TextField
              id="register-user-password"
              label="Password"
              type="password"
              variant="outlined"
              value={regPassword}
              required
              onChange={e => setRegPassword(e.target.value)}
            />
          </div>

          <div className="btn-container">
            {isLoading ? <Spinner /> : <input type="submit" value="REGISTER" className="post-btn" />}
          </div>
          {error === "registerUser" && <p className="is-error primary">Couldn't register user</p>}
          {success === "registerUser" && <p className="is-success">User was registered</p>}
        </form>
      </div>
      <div className="container--admin">
        <form className="container--form" onSubmit={handlePromotion}>
          <h3 className="form__title">Promote user to system admin</h3>
          <div className="form__field">
            <Autocomplete
              value={promoteValue}
              onChange={(event, newValue) => {
                setPromoteValue(newValue);
              }}
              inputValue={promoteInputValue}
              onInputChange={(event, newInputValue) => {
                setPromoteInputValue(newInputValue);
              }}
              getOptionLabel={(option) => option.email}
              id="controllable-states-demo"
              options={emails ? emails : []}
              renderOption={(option) => (
                <React.Fragment>
                  <div className='dropdown-label'>
                    <span className='name'>{option.first_name} {option.last_name}</span>
                    <span className='email'>{option.email}</span>
                  </div>
                </React.Fragment>
              )}
              noOptionsText={emails ? 'Cannot find that user' : 'No users exist'}
              renderInput={(params) => <TextField {...params} variant="outlined" label="Select User" required/>}
            />
          </div>
          <div className="btn-container">
            {isLoading ? <Spinner /> : <input type="submit" value="PROMOTE" className="post-btn" />}
          </div>
          {error === "promoteUser" && <p className="is-error primary">User either does not exists or is already admin</p>}
          {success === "promoteUser" && <p className="is-success">User was promoted</p>}
        </form>
      </div>
      <div className="container--admin">
        <form className="container--form" onSubmit={handleDelete}>
          <h3 className="form__title">Delete existing user</h3>
          <div className="form__field">
            <Autocomplete
              value={deleteValue}
              onChange={(event, newValue) => {
                setDeleteValue(newValue);
              }}
              inputValue={deleteInputValue}
              onInputChange={(event, newInputValue) => {
                setDeleteInputValue(newInputValue);
              }}
              getOptionLabel={(option) => option.email}
              id="controllable-states-demo"
              options={emails ? emails : []}
              renderOption={(option) => (
                <React.Fragment>
                  <div className='dropdown-label'>
                    <span className='name'>{option.first_name} {option.last_name}</span>
                    <span className='email'>{option.email}</span>
                  </div>
                </React.Fragment>
              )}
              noOptionsText={emails ? 'Cannot find that user' : 'No users exist'}
              renderInput={(params) => <TextField {...params} variant="outlined" label="Select User" required/>}
            />
          </div>
          <div className="btn-container">
            {isLoading ? <Spinner /> : <input type="submit" value="DELETE" className="post-btn del" />}
          </div>
          {error === "deleteUser" && <p className="is-error primary">Error deleting user</p>}
          {success === "deleteUser" && <p className="is-success">User was deleted</p>}
        </form>
      </div>
    </div>
  );
}

export default AdminUsers;