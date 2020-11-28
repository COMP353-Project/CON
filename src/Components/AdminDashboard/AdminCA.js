import React from 'react';
import AdminNav from './AdminNav';
import './AdminStyles.css';
import TextField from '@material-ui/core/TextField';

function AdminCA () {
  const [email, setEmail] = React.useState("");
  const [regName, setRegName] = React.useState("")
  const [promoteName, setPromoteName] = React.useState("")
  const [delName, setDelName] = React.useState("")

  return (
    <div>
      <AdminNav />
      <div className="container--admin">
        <form className="container--form">
          <h3 className="form__title">Register new Condo-Association</h3>
          <div className="form__field">
            <TextField
              id="register-ca"
              label="Condo-Association name"
              type="text"
              variant="outlined"
              value={regName}
              required
              onChange={e => setRegName(e.target.value)}
            />
          </div>
          <button className="submit-btn" /**onClick={handleClick}**/>REGISTER</button>
        </form>
      </div>

      <div className="container--admin">
        <form className="container--form">
          <h3 className="form__title">Assign user to an existing Condo-Association</h3>
          <div className="form__field">
            <TextField
              id="assign-user-ca-name"
              label="Condo-Association name"
              type="text"
              variant="outlined"
              value={promoteName}
              required
              onChange={e => setPromoteName(e.target.value)}
            />
          </div>
          <div className="form__field">
            <TextField
              id="assign-user-ca-email"
              label="User email"
              type="email"
              variant="outlined"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button className="submit-btn" /**onClick={handleClick}**/>REGISTER</button>
        </form>
      </div>

      <div className="container--admin">
        <form className="container--form">
          <h3 className="form__title">Delete existing Condo-Association</h3>
          <div className="form__field">
            <TextField
              id="delete-ca"
              label="Condo-Association name"
              type="text"
              variant="outlined"
              value={delName}
              required
              onChange={e => setDelName(e.target.value)}
            />
          </div>
          <button className="submit-btn delete" /**onClick={handleClick}**/>DELETE</button>
        </form>
      </div>
    </div>
  );
}

export default AdminCA;