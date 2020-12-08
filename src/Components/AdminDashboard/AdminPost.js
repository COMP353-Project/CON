import React from 'react';
import Nav from './AdminNav';
import './AdminStyles.css';
import TextField from '@material-ui/core/TextField';

function AdminPost () {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  return (
    <div>
      <Nav />
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
            <label>Attachments</label> 
            <input type="file" id="admin-post-attachments" accept=".jpg,.png,.gif"></input>
          </div>
          <div className="btn-container">
            <button className="post-btn" /**onClick={handleClick}**/>POST</button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default AdminPost;