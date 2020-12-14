import createDataContext from './createDataContext';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'start_loading': return { ...state, isLoading: true };
    case 'stop_loading': return { ...state, isLoading: false };
    case 'set_error': return { ...state, error: action.payload };
    case 'reset_error': return { ...state, error: '' };
    case 'fetch_conversations': return { ...state, conversations: action.payload };
    case 'fetch_conversation': return { ...state, messages: action.payload };
    default: return state;
  }
};

// Fetch Conversations

const fetchConversations = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get(
      `get_conversations.php?id=${localStorage.getItem('userid')}`
    ); // GET conversations URL
    dispatch({ type: 'fetch_conversations', payload: data });
    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Conversation

const fetchConversation = dispatch => async ({ conversationId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get(
      `get_messages.php?id=${conversationId}`
    ); // GET conversation URL
    dispatch({ type: 'fetch_conversation', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Send Email

const sendEmail = dispatch => async ({ conversationId, content }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.post(
      'send_message.php',
      { conversation_id: conversationId, content, user_id: localStorage.getItem('userid') }
    ); // POST email URL
  } catch (e) {
    console.log(e.message);
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Create Conversation

const createConversation = dispatch => async ({ subject, recipients, content }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.post(
      'create_conversation.php',
      { subject, recipients, content, user_id: localStorage.getItem('userid') }
    ); // POST conversation URL

    return data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Leave Conversation

const leaveConversation = dispatch => async ({ conversationId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.delete(
      'leave_conversation.php',
      { data: { conversation_id: conversationId, user_id: localStorage.getItem('userid') } }
    ); // LEAVE conversation URL
  } catch (e) {
    console.log(e.message);
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

export const { Context, Provider } = createDataContext(reducer, {
  fetchConversations, fetchConversation, sendEmail, createConversation, leaveConversation
}, { conversations: [], messages: [], isLoading: false, error: '' });