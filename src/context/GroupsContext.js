import createDataContext from './createDataContext';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'start_loading': return { ...state, isLoading: true };
    case 'stop_loading': return { ...state, isLoading: false };
    case 'set_error': return { ...state, error: action.payload };
    case 'reset_error': return { ...state, error: '' };
    case 'fetch_my_groups': return { ...state, myGroups: action.payload };
    case 'fetch_all_groups': return { ...state, allGroups: action.payload };
    case 'fetch_group': return { ...state, group: action.payload };
    case 'fetch_posts': return { ...state, posts: action.payload };
    case 'fetch_post': return { ...state, post: action.payload };
    case 'fetch_chat_messages': return { ...state, chatMessages: action.payload };
    case 'fetch_requests': return { ...state, requests: action.payload };
    default: return state;
  }
};

// Fetch All Groups

const fetchAllGroups = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8080/con/api/groups/fetch.php',
      headers: {
        'content-type': 'application/json'
      },
    });
    dispatch({ type: 'fetch_all_groups', payload: response.data });
    dispatch({ type: 'stop_loading' });
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Request Group

const requestGroup = dispatch => async ({ groupId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.post('', { groupId }); // POST group_request URL

    fetchAllGroups();
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch My Groups

const fetchMyGroups = dispatch => async (id) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios.get(`http://localhost:8080/con/api/groups/getMyGroups.php?id=${id}`);
    console.log(response)
    dispatch({ type: 'fech_my_groups', payload: response });
    dispatch({ type: 'stop_loading' });

    console.log(response.data)
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Group Members

const fetchGroupMembers = dispatch => async (group_id) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:8080/con/api/groups/getMembers.php?group_id=${group_id}`,
      headers: {
        "content-type": "application/json",
      },
    });
    dispatch({ type: 'fech_members', payload: response.data });
    dispatch({ type: 'stop_loading' });

    // console.log(response)
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Create Group

const createGroup = dispatch => async ({ name, description }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.post('', { name, description }); // POST groups URL

    return data.id;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Group

const fetchGroup = dispatch => async ({ group_id, user_id }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: "post",
      url: 'http://localhost:8080/con/api/groups/getGroup.php',
      headers: {
        "content-type": "application/json",
      },
      data: { group_id: group_id, user_id: user_id },
    });
    dispatch({ type: 'fetch_group', payload: response.data });
    dispatch({ type: 'stop_loading' });
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Edit Group

const editGroup = dispatch => async ({ groupId, title, description }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.put('', { groupId, title, description }); // PUT group URL
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Leave Group

const leaveGroup = dispatch => async ({ groupId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.delete('', { groupId }); // DELETE group_member URL
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Posts

const fetchPosts = dispatch => async (groupId) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });
  try {
    const response = await axios.get(`http://localhost:8080/api/groups/getGroupPosts.php?id=${groupId}`); // GET group_posts URL
    dispatch({ type: 'fetch_posts', payload: response });

    dispatch({ type: 'stop_loading' });
    console.log(response.data)
    return response.data
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

const fetchPost = dispatch => async ({ postId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { postId } }); // GET post URL
    dispatch({ type: 'fetch_post', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Create Discussion Post

const createPost = dispatch => async (user_id, group_id, title, description) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });
  try {
    const response = await axios({
      method: "post",
      url: 'http://localhost:8080/con/api/groups/sendPost.php',
      headers: {
        "content-type": "application/json",
      },
      data: { user_id, group_id, title, description },
    });
    console.log(response.data)
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Edit Post

const editPost = dispatch => async ({ postId, title, content }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.put('', { postId, title, content }); // PUT post URL
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Delete Post

const deletePost = dispatch => async ({ postId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.delete('', { postId });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Add Comment

const addComment = dispatch => async ({ postId, content }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.post('', { postId, content }); // POST comment URL

    fetchPost({ postId });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Chat Messages

const fetchChatMessages = dispatch => async ({ groupId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { groupId } }); // GET chat_messages URL
    dispatch({ type: 'fetch_chat_messages', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Send Chat Message

const sendChatMessage = dispatch => async ({ groupId, content }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.post('', { groupId, content }); // POST chat_message URL

    fetchChatMessages({ groupId });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Requests

const fetchRequests = dispatch => async ({ groupId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { groupId } }); // GET requests URL
    dispatch({ type: 'fetch_requests', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Handle Request

const handleRequest = dispatch => async ({ groupId, userId, accept }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.put('', { groupId, userId, accept }); // PUT request URL

    fetchRequests({ groupId });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

export const { Context, Provider } = createDataContext(reducer, {
  fetchAllGroups, requestGroup, fetchMyGroups, fetchGroupMembers, createGroup, fetchGroup, editGroup, leaveGroup, fetchPosts, fetchPost,
  createPost, editPost, deletePost, addComment, fetchChatMessages, sendChatMessage, fetchRequests, handleRequest
}, {
  myGroups: [], allGroups: [], group: null, posts: [], post: null, chatMessages: [], requests: [], isLoading: false, error: ''
});