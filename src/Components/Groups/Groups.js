import React from 'react';
import Post from './Post';
import TextField from '@material-ui/core/TextField';
import GroupsNav from './GroupsNav.js'
import MyGroupNav from './MyGroupNav.js'
import { Context as GroupsContext } from '../../context/GroupsContext.js'
import { useParams } from 'react-router-dom';
import Spinner from '../Global/Spinner';

function Groups () {
  const { createPost, fetchPosts, state: { error, success, isLoading } } = React.useContext(GroupsContext);
  const [posts, setPosts] = React.useState([]);
  const [postTextInput, setPostText] = React.useState("");
  const [postTitleInput, setPostTitle] = React.useState("");

  const { id } = useParams();


  const getPosts = async () => {
    setPosts(await fetchPosts( id ));
  }

  const handlePost = (e) => {
    e.preventDefault();

    const info = {
      user_id: localStorage.getItem('userid'),
      group_id: id,
      title: postTitleInput,
      description: postTextInput
    }

    createPost(info);

    // Reset form
    setPostText('');
    setPostTitle('');
  }

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <GroupsNav />
      <MyGroupNav />
      <div className="page-container">
        <div className="page-header">
          <h1>Group Posts</h1>
        </div>
        <div>
          {posts == null ? <div className="card-description centered">No posts!</div> : posts.map(post => {
            return (
              <Post description={post.description} title={post.title} user={post.first_name + " " + post.last_name} date={post.created_at} />
            );
          }
          )}
        </div>
        <div className="card">
          <h1>Create a post</h1>
          {error === "createGroupPost" && <p className="is-error primary">Couldn't create post</p>}
          {success === "createGroupPost" && <p className="is-success">Post created</p>}
          <form onSubmit={handlePost}>
            <div className="form__field">
              <TextField
                id="group-post-title"
                label="Title"
                type="text"
                variant="outlined"
                value={postTitleInput}
                required
                onChange={e => setPostTitle(e.target.value)}
              />
            </div>
            <div className="form__field">
              <TextField
                id="group-post-title"
                label="Content"
                type="text"  
                variant="outlined"
                value={postTextInput}
                required
                multiline
                rows="5"
                onChange={e => setPostText(e.target.value)}
              />          
            </div>
            <div className="btn-container">
              {isLoading ? <Spinner /> : <input type="submit" value="POST" className="post-btn" />}
            </div>
          </form>

        </div>
      </div>
    </div>

  );
}

export default Groups;
