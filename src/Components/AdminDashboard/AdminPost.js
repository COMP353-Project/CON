import React from 'react';
import Nav from './AdminNav';
import Spinner from '../Global/Spinner';
import './AdminStyles.css';
import TextField from '@material-ui/core/TextField';
import { Context as AdminContext } from '../../context/AdminContext';

function AdminPost () {
  const { createAdminPost, state: { error, success, isLoading } } = React.useContext(AdminContext);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handlePost = (e) => {
    e.preventDefault();

    const info = {
      id: localStorage.getItem('userid'),
      title: title,
      content: content
    }

    createAdminPost(info);

    // Reset form
    setTitle('');
    setContent('');
  }

  return (
    <div>
      <Nav />
      <div className="container--admin">
        <form className="container--form" onSubmit={handlePost}>
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
              rows="5"
              onChange={e => setContent(e.target.value)}
            />          
          </div>
          <div className="btn-container">
            {isLoading ? <Spinner /> : <input type="submit" value="POST" className="post-btn" />}
          </div>
          {error === "createAdminPost" && <p className="is-error primary">Couldn't create post</p>}
          {success === "createAdminPost" && <p className="is-success">Post created</p>}
        </form>
      </div>

    </div>
  );
}

export default AdminPost;