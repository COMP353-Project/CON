import React from 'react';
import Nav from './AdminNav';
import './AdminStyles.css';
import TextField from '@material-ui/core/TextField';
import Spinner from '../Global/Spinner';
import { Context as AdminContext } from '../../context/AdminContext';

function AdminCA () {
  const { registerCA, assignUser, deleteCA, state:{ error, success, isLoading } } = React.useContext(AdminContext);

  // Form field states
  const [email, setEmail] = React.useState("");
  const [regName, setRegName] = React.useState("")
  const [promoteName, setPromoteName] = React.useState("")
  const [delName, setDelName] = React.useState("")


  /**
   * Function that handles condo association registration
   * @param {*} e 
   */
  const handleRegister = async (e) => {
    e.preventDefault();

    const info = {
      name: regName,
    }

    registerCA(info);

    // Reset form values
    setRegName('');
  }

  /**
   * Function that handles assigning a user to a condo association
   * @param {*} e 
   */
  const handleAssign = async (e) => {
    e.preventDefault();

    const info = {
      email: email,
      name: promoteName
    }

    assignUser(info);

    // Reset form values
    setEmail('');
    setPromoteName('');
  }

  /**
   * Function that handles condo association deletion
   * @param {*} e 
   */
  const handleDelete = async (e) => {
    e.preventDefault();

    const info = {
      name: delName
    }

    deleteCA(info);

    // Reset form values
    setDelName('');
  }

  return (
    <div>
      <Nav />
      <div className="container--admin">
        <form className="container--form" onSubmit={handleRegister}>
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
          <div className="btn-container">
            {isLoading ? <Spinner/> : <input type="submit" value="REGISTER" className="post-btn"/>}
          </div>
          {error === "registerCA" && <p className="is-error primary">Couldn't register Condo Association</p>}
          {success === "registerCA" && <p className="is-success">Condo Association was registered</p>}
        </form>
      </div>

      <div className="container--admin" onSubmit={handleAssign}>
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
          <div className="btn-container">
            {isLoading ? <Spinner/> : <input type="submit" value="ASSIGN" className="post-btn"/>}
          </div>
          {error === "assignCA" && <p className="is-error primary">Couldn't assign user to Condo Association</p>}
          {success === "assignCA" && <p className="is-success">User was assigned to Condo Association</p>}
        </form>
      </div>

      <div className="container--admin" onSubmit={handleDelete}>
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
          <div className="btn-container">
            {isLoading ? <Spinner/> : <input type="submit" value="DELETE" className="post-btn del"/>}
          </div>
          {error === "deleteCA" && <p className="is-error primary">Error deleting Condo Association</p>}
          {success === "deleteCA" && <p className="is-success">Condo Association was was deleted</p>}
        </form>
      </div>
    </div>
  );
}

export default AdminCA;