import React from 'react';
import Nav from './AdminNav';
import './AdminStyles.css';
import TextField from '@material-ui/core/TextField';
import { Context as AuthenticationContext } from '../../context/AuthenticationContext';

function AdminUsers (props) {
  const [firstName, setFirstName] = React.useState("");  
  const [lastName, setLastName] = React.useState("");
  const [regEmail, setRegEmail] = React.useState("");
  const [regAddress, setRegAddress] = React.useState("");
  const [regPassword, setRegPassword] = React.useState("")
  const [promoteEmail, setPromoteEmail] = React.useState("")
  const [delEmail, setDelEmail] = React.useState("")
  const [error, setError] = React.useState(false);

  const { register } = React.useContext(AuthenticationContext);

  const handleClick = async (e) => {
    e.preventDefault();
    const data = await register({ first_name: firstName, last_name: lastName, email: regEmail, password: regPassword, address: regAddress});
    if (data) {
        setError(false);
        props.history.push('/admin/users');
    }
    else {
        setError(true);
    }
  }

  return (
    <div>
      <Nav />
      <div className="container--admin">
        <form className="container--form">
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
            <button className="post-btn" onClick={handleClick}>REGISTER</button>
          </div>
          {error && <p className="is-error">Error creating user!</p>}
        </form>
      </div>
      <div className="container--admin">
        <form className="container--form">
          <h3 className="form__title">Promote user to system admin</h3>
          <div className="form__field">
            <TextField
              id="register-user-email"
              label="Email"
              type="email"
              variant="outlined"
              value={promoteEmail}
              required
              onChange={ e => setPromoteEmail(e.target.value) }
            />
          </div>
          <div className="btn-container">
            <button className="post-btn" /*onClick={handleClick}*/>PROMOTE</button>
          </div>

        </form>
      </div>
      <div className="container--admin">
        <form className="container--form">
          <h3 className="form__title">Delete existing user</h3>
          <div className="form__field">
            <TextField
              id="delete-user-email"
              label="Email"
              type="email"
              variant="outlined"
              value={delEmail}
              required
              onChange={e => setDelEmail(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button className="post-btn del" /**onClick={handleClick}**/>DELETE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminUsers;