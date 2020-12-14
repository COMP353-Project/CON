import React from 'react';
import './AdminStyles.css';
import Nav from './AdminNav';
import Spinner from '../Global/Spinner';
import TextField from '@material-ui/core/TextField';
import { Context as AdminContext } from '../../context/AdminContext';
import { Context as GroupsContext } from '../../context/GroupsContext';
import Autocomplete from '@material-ui/lab/Autocomplete';

function AdminGroups () {
  const { deleteGroup, state: { error, success, isLoading } } = React.useContext(AdminContext);
  const { fetchAllGroups } = React.useContext(GroupsContext);
  const [groups, setGroups] = React.useState([]);
  const [deleteValue, setDeleteValue] = React.useState('');
  const [deleteInputValue, setDeleteInputValue] = React.useState('');

  /**
 * Function that handles group deletion
 * @param {*} e 
 */
  const handleDelete = async (e) => {
    e.preventDefault();

    const info = {
      name: deleteInputValue
    }

    deleteGroup(info);

    // Reset form values
    setDeleteValue('');
  }

  React.useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async () => {
    setGroups(await fetchAllGroups());
  };

  return (
    <div>
      <Nav />
      <div className="container--admin">
        <form className="container--form" onSubmit={handleDelete}>
          <h3 className="form__title">Delete group</h3>
          <div className="form__field">
            <Autocomplete
              className="friend-field"
              options={groups ? groups : []}
              noOptionsText={'No groups exist'}
              id="delete-group"
              renderOption={(option) => (
                <React.Fragment>
                  <div className='dropdown-label'>
                    <span className='name'>{option.name}</span>
                  </div>
                </React.Fragment>
              )}
              value={deleteValue}
              onChange={(event, newValue) => {
                setDeleteValue(newValue)
              }}
              inputValue={deleteInputValue}
              onInputChange={(event, newInputValue) => {
                setDeleteInputValue(newInputValue);
              }}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => <TextField {...params} type='text' required label="Select Group" id="delete-group" variant="outlined" />}
            />
          </div>
          <div className="btn-container">
            {isLoading ? <Spinner /> : <input type="submit" value="DELETE" className="post-btn del" />}
          </div>
          {error === "deleteGroup" && <p className="is-error primary">Error deleting group</p>}
          {success === "deleteGroup" && <p className="is-success">Group was deleted</p>}
        </form>
      </div>
    </div>
  );
}

export default AdminGroups;