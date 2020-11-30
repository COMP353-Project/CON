import React from 'react';
import './AdminStyles.css';
import Nav from './AdminNav';
import TextField from '@material-ui/core/TextField';

function AdminGroups () {
  const [name, setName] = React.useState("");

  return (
    <div>
      <Nav />
      <div className="container--admin">
        <form className="container--form">
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
          <button className="submit-btn delete" /**onClick={handleClick}**/>DELETE</button>
        </form>
      </div>
    </div>
  );
}

export default AdminGroups;