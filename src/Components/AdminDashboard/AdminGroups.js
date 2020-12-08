import React from 'react';
import './AdminStyles.css';
import Nav from './AdminNav';
import Spinner from '../Global/Spinner';
import TextField from '@material-ui/core/TextField';
import { Context as AdminContext } from '../../context/AdminContext';

function AdminGroups () {
  const { deleteGroup , state:{ error, success, isLoading } } = React.useContext(AdminContext);
  const [name, setName] = React.useState("");

    /**
   * Function that handles group deletion
   * @param {*} e 
   */
  const handleDelete = async (e) => {
    e.preventDefault();

    const info = {
      name: name
    }

    deleteGroup(info);

    // Reset form values
    setName('');
  }

  return (
    <div>
      <Nav />
      <div className="container--admin">
        <form className="container--form" onSubmit={handleDelete}>
          <h3 className="form__title">Delete group</h3>
          <div className="form__field">
            <TextField
              id="delete-group"
              label="Group name"
              type="text"
              variant="outlined"
              value={name}
              required
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="btn-container">
            {isLoading ? <Spinner/> : <input type="submit" value="DELETE" className="post-btn del"/>}
          </div>
          {error === "deleteGroup" && <p className="is-error primary">Error deleting group</p>}
          {success === "deleteGroup" && <p className="is-success">Group was deleted</p>}
        </form>
      </div>
    </div>
  );
}

export default AdminGroups;