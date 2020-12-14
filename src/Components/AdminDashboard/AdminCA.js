import React from 'react';
import Nav from './AdminNav';
import './AdminStyles.css';
import TextField from '@material-ui/core/TextField';
import Spinner from '../Global/Spinner';
import { Context as AdminContext } from '../../context/AdminContext';
import { Context as CondoAssociationContext } from '../../context/CondoAssociationContext';
import Autocomplete from '@material-ui/lab/Autocomplete';

function AdminCA () {
  const { fetchUsers, registerCA, assignUser, deleteCA, state: { error, success, isLoading } } = React.useContext(AdminContext);
  const { fetchCondoAssociations } = React.useContext(CondoAssociationContext);

  // Form field states
  const [regName, setRegName] = React.useState("");
  const [delName, setDelName] = React.useState("");
  const [emails, setEmails] = React.useState([]);
  const [associations, setAssociations] = React.useState([]);
  const [assocValue, setAssocValue] = React.useState("");
  const [assocInputValue, setAssocInputValue] = React.useState("");
  const [delAssocValue, setDelAssocValue] = React.useState("");
  const [delAssocInputValue, setDelAssocInputValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [emailInputValue, setEmailInputValue] = React.useState("");


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
      email: emailInputValue,
      name: assocInputValue
    }

    assignUser(info);

    // Reset form values
    setEmailValue('');
    setAssocValue('');
  }

  /**
   * Function that handles condo association deletion
   * @param {*} e 
   */
  const handleDelete = async (e) => {
    e.preventDefault();

    const info = {
      // name: delName
      name: delAssocInputValue
    }

    deleteCA(info);

    // Reset form values
    setDelAssocValue('');

    // setDelName('');
  }

  const getUsers = async () => {
    setEmails(await fetchUsers());
  };

  const getAssociations = async () => {
    setAssociations(await fetchCondoAssociations());
  };


  React.useEffect(() => {
    getUsers();
    getAssociations();
  }, []);

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
            {isLoading ? <Spinner /> : <input type="submit" value="REGISTER" className="post-btn" />}
          </div>
          {error === "registerCA" && <p className="is-error primary">Couldn't register Condo Association</p>}
          {success === "registerCA" && <p className="is-success">Condo Association was registered</p>}
        </form>
      </div>

      <div className="container--admin" onSubmit={handleAssign}>
        <form className="container--form">
          <h3 className="form__title">Assign user to an existing Condo-Association</h3>
          <div className="form__field">
            <Autocomplete
              className="friend-field"
              options={associations ? associations : []}
              noOptionsText={'No associations exist'}
              renderOption={(option) => (
                <React.Fragment>
                  <div className='dropdown-label'>
                    <span className='name'>{option.name}</span>
                  </div>
                </React.Fragment>
              )}
              value={assocValue}
              onChange={(event, newValue) => {
                setAssocValue(newValue)
              }}
              inputValue={assocInputValue}
              onInputChange={(event, newInputValue) => {
                setAssocInputValue(newInputValue);
              }}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => <TextField {...params} required type="text" label="Select Condo-Association" id="assign-user-ca-name" variant="outlined" />}
            />
          </div>
          <div className="form__field">
            <Autocomplete
              className="friend-field"
              options={emails ? emails : []}
              noOptionsText={'No emails exist'}
              id="email"
              renderOption={(option) => (
                <React.Fragment>
                  <div className='dropdown-label'>
                    <span className='name'>{option.first_name} {option.last_name}</span>
                    <span className='email'>{option.email}</span>
                  </div>
                </React.Fragment>
              )}
              value={emailValue}
              onChange={(event, newValue) => {
                setEmailValue(newValue)
              }}
              inputValue={emailInputValue}
              onInputChange={(event, newInputValue) => {
                setEmailInputValue(newInputValue);
              }}
              getOptionLabel={(option) => option.email}
              renderInput={(params) => <TextField {...params} required type="email" label="Select User" id="assign-user-ca-email" variant="outlined" />}
            />
          </div>
          <div className="btn-container">
            {isLoading ? <Spinner /> : <input type="submit" value="ASSIGN" className="post-btn" />}
          </div>
          {error === "assignCA" && <p className="is-error primary">Couldn't assign user to Condo Association</p>}
          {success === "assignCA" && <p className="is-success">User was assigned to Condo Association</p>}
        </form>
      </div>

      <div className="container--admin" onSubmit={handleDelete}>
        <form className="container--form">
          <h3 className="form__title">Delete existing Condo-Association</h3>
          <div className="form__field">
            <Autocomplete
              className="friend-field"
              options={associations ? associations : []}
              noOptionsText={'No associations exist'}
              renderOption={(option) => (
                <React.Fragment>
                  <div className='dropdown-label'>
                    <span className='name'>{option.name}</span>
                  </div>
                </React.Fragment>
              )}
              value={delAssocValue}
              onChange={(event, newValue) => {
                setDelAssocValue(newValue)
              }}
              inputValue={delAssocInputValue}
              onInputChange={(event, newInputValue) => {
                setDelAssocInputValue(newInputValue);
              }}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => <TextField {...params} required type="text" label="Select Condo-Association" id="assign-user-ca-name" variant="outlined" />}
            />
          </div>
          <div className="btn-container">
            {isLoading ? <Spinner /> : <input type="submit" value="DELETE" className="post-btn del" />}
          </div>
          {error === "deleteCA" && <p className="is-error primary">Error deleting Condo Association</p>}
          {success === "deleteCA" && <p className="is-success">Condo Association was was deleted</p>}
        </form>
      </div>
    </div>
  );
}

export default AdminCA;