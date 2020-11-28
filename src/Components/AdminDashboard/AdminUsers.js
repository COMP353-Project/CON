import React from 'react';
import AdminNav from './AdminNav';
import './AdminStyles.css';
import TextField from '@material-ui/core/TextField';

function AdminUsers () {
  const [firstName, setFirstName] = React.useState("");  
  const [lastName, setLastName] = React.useState("");
  const [regEmail, setRegEmail] = React.useState("")
  const [promoteEmail, setPromoteEmail] = React.useState("")
  const [delEmail, setDelEmail] = React.useState("")
  // const [success, setSuccessMessage] = React.useState("")
  // const [error, setError] = React.useState(false);
  return (
    <div>
      <AdminNav />
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
          <button className="submit-btn" /**onClick={handleClick}**/>REGISTER</button>
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
          <button className="submit-btn" /*onClick={handleClick}*/>PROMOTE</button>
          {/* {error && <p className="is-error">No such user exists!</p>}
          {!error && <p className="is-success">{success}</p>} */}
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
          <button className="submit-btn delete" /**onClick={handleClick}**/>DELETE</button>
        </form>
      </div>
    </div>
  );
}

export default AdminUsers;