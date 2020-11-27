import React from 'react';
import AdminNav from './AdminNav';
import './AdminStyles.css';
import TextField from '@material-ui/core/TextField';

function AdminPost () {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  return (
    <div>
      <AdminNav />
      <div className="container--admin">
        <form className="container--form">
          <h3 className="form__title">Create Post</h3>
          <div className="form__field">
            <TextField
              id="admin-post-title"
              label="Title"
              type="text"
              variant="outlined"
              value={title}
              required
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="form__field">
            <TextField
              id="admin-post-title"
              label="Content"
              type="text"  
              variant="outlined"
              value={content}
              required
              multiline
              onChange={e => setContent(e.target.value)}
            />          
          </div>
          <div className="form__field">
            <label for="admin-post-attachments">Attachments</label> 
            <input type="file" id="admin-post-attachments" accept=".jpg,.png,.gif"></input>
          </div>
          <div className="form__field">
            <button className="submit-btn" /**onClick={handleClick}**/>POST</button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default AdminPost;