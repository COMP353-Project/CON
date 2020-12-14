import { Button, OutlinedInput } from '@material-ui/core';
import React from 'react';
import Post from './Post';

import GroupsNav from './GroupsNav.js'
import MyGroupNav from './MyGroupNav.js'
import { Context as GroupsContext } from '../../context/GroupsContext.js'
import { useParams } from 'react-router-dom';

function Groups () {
  const { createPost, fetchPosts } = React.useContext(GroupsContext);
  const [posts, setPosts] = React.useState([]);
  const [postTextInput, setPostText] = React.useState("");
  const [postTitleInput, setPostTitle] = React.useState("");

  const { id } = useParams();


  const getPosts = async () => {
    setPosts(await fetchPosts( id ));
  }

  const sendPosts = async (user_id, group_id, title, description) => {
    const data = await (createPost(user_id, group_id, title, description))
    getPosts()
  }

  React.useEffect(() => {
    getPosts();
    sendPosts();
  }, []);

  const handlePostTextChange = ({ target }) => {
    setPostText(target.value)
  }

  const handlePostTitleChange = ({ target }) => {
    setPostTitle(target.value)
  }

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
          <OutlinedInput type="text" className="group-post title" placeholder="Write a title..." fullWidth="true" value={postTitleInput} onChange={handlePostTitleChange} />
          <OutlinedInput type="text" className="group-post" placeholder="Write a post..." fullWidth="true" multiline rows="5" value={postTextInput} onChange={handlePostTextChange} />
          <div className="btn-container">
            <button className="post-btn" /**onClick={handleClick}**/>POST</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Groups;
