import createDataContext from './createDataContext';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'start_loading': return { ...state, isLoading: true };
    case 'stop_loading': return { ...state, isLoading: false };
    case 'set_error': return { ...state, error: action.payload };
    case 'reset_error': return { ...state, error: '' };
    case 'fetch_conversations': return { ...state, conversations: action.payload };
    case 'fetch_sent_messages': return { ...state, sentMessages: action.payload };
    case 'fetch_conversation': return { ...state, conversation: action.payload };
    default: return state;
  }
};

// Fetch Conversations

const fetchConversations = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get(''); // GET conversations URL
    dispatch({ type: 'fetch_conversations', payload: data.conversations });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Sent

const fetchSent = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get(''); // GET sent_messages URL
    dispatch({ type: 'sent_messages', payload: data });

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
    const { data } = await axios.get('', { params: { conversationId } }); // GET conversation URL
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
    await axios.post('', { conversationId, content }); // POST email URL

    fetchConversation({ conversationId });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Create Conversation

const createConversation = dispatch => async ({ subject, recipients, content }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.post('', { subject, recipients, content }); // POST conversation URL

    return data.id;
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
    await axios.post('', { conversationId }); // LEAVE conversation URL

    fetchConversations();
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

export const { Context, Provider } = createDataContext(reducer, {
  fetchConversations, fetchConversation, fetchSent, sendEmail, createConversation, leaveConversation
}, { conversations: [], sentMessages: [], conversation: null, isLoading: false, error: '' });