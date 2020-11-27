import createDataContext from './createDataContext';
import axios from 'axios';
import history from '../navigation/history';

const reducer = (state, action) => {
  switch (action.type) {
    case 'start_loading': return { ...state, isLoading: true };
    case 'stop_loading': return { ...state, isLoading: false };
    case 'set_error': return { ...state, error: action.payload };
    case 'reset_error': return { ...state, error: '' };
    case 'fetch_condo_associations': return { ...state, condoAssociations: action.payload };
    case 'fetch_condo_association': return { ...state, condoAssociation: action.payload };
    case 'fetch_discussions': return { ...state, discussions: action.payload };
    case 'fetch_discussion': return { ...state, discussion: action.payload };
    case 'fetch_ads': return { ...state, ads: action.payload };
    case 'fetch_ad': return { ...state, ad: action.payload };
    case 'fetch_admin_meetings': return { ...state, adminMeetings: action.payload };
    case 'fetch_admin_meeting': return { ...state, adminMeeting: action.payload };
    case 'fetch_general_meetings': return { ...state, generalMeetings: action.payload };
    case 'fetch_general_meeting': return { ...state, generalMeeting: action.payload };
    case 'fetch_polls': return { ...state, polls: action.payload };
    case 'fetch_poll': return { ...state, poll: action.payload };
    case 'fetch_elections': return { ...state, elections: action.payload };
    case 'fetch_election': return { ...state, election: action.payload };
    default: return state;
  }
};

// Fetch Condo Associations

const fetchCondoAssociations = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get(''); // GET condo_associations URL
    dispatch({ type: 'fetch_condo_associations', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Condo Association

const fetchCondoAssociation = dispatch => async ({ condoAssociationId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { condoAssociationId } }); // GET condo_association URL
    dispatch({ type: 'fetch_condo_association', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Discussion

const fetchDiscussions = dispatch => async ({ condoAssociationId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { condoAssociationId } }); // GET discussions URL
    dispatch({ type: 'fetch_discussions', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Discussion

const fetchDiscussion = dispatch => async ({ discussionId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { discussionId } }); // GET discussion URL
    dispatch({ type: 'fetch_discussion', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Create Discussion

const createDiscussion = dispatch => async ({ condoAssociationId, title, isPublic, content }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.post('', { condoAssociationId, title, isPublic, content }); // POST discussion URL
    
    history.push(`/condoAssociations/${condoAssociationId}/discussions/${data.id}`);
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Update Discussion

const updateDiscussion = dispatch => async ({ discussionId, condoAssociationId, title, isPublic, content }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.put('', { discussionId, title, isPublic, content }); // PUT discussion URL

    history.push(`/condoAssociations/${condoAssociationId}/discussions/${discussionId}`);
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Delete Discussion

const deleteDiscussion = dispatch => async ({ condoAssociationId, discussionId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.delete('', { discussionId }); // DELETE discussion URL

    history.push(`/condoAssociations/${condoAssociationId}/discussions`);
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Add Comment

const addComment = dispatch => async ({ discussionId, content }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.post('', { discussionId, content }); // POST comment URL

    fetchDiscussion({ discussionId });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Fetch Ads

const fetchAds = dispatch => async ({ condoAssociationId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { condoAssociationId } }); // GET ads URL
    dispatch({ type: 'fetch_ads', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Fetch Ad

const fetchAd = dispatch => async ({ adId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { adId } }); // GET ad URL
    dispatch({ type: 'fetch_ad', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Create Ad

const createAd = dispatch => async ({ condoAssociationId, title, contactNumber, price, isPublic, description }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.post('', { condoAssociationId, title, contactNumber, price, isPublic, description }); // POST ad URL
    
    history.push(`/condoAssociations/${condoAssociationId}/ads/${data.id}`);
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Update Ad

const udpdateAd = dispatch => async ({ adId, condoAssociationId, title, contactNumber, price, isPublic, description }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.put('', { adId, title, contactNumber, price, isPublic, description }); // PUT ad URL

    history.push(`/condoAssociations/${condoAssociationId}/ads/${adId}`);
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Delete Ad

const deleteAd = dispatch => async ({ condoAssociationId, adId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.delete('', { adId }); // DELETE ad URL

    history.push(`/condoAssociations/${condoAssociationId}/ads`);
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Fetch Admin Meetings

const fetchAdminMeetings = dispatch => async ({ condoAssociationId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { condoAssociationId } }); // GET admin_meetings URL
    dispatch({ type: 'fetch_admin_meetings', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Fetch Admin Meeting

const fetchAdminMeeting = dispatch => async ({ adminMeetingId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { adminMeetingId } }); // GET admin_meeting URL
    dispatch({ type: 'fetch_admin_meeting', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch General Meetings

const fetchGeneralMeetings = dispatch => async ({ condoAssociationId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { condoAssociationId } }); // GET general_meetings URL
    dispatch({ type: 'fetch_general_meetings', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch General Meeting

const fetchGeneralMeeting = dispatch => async ({ generalMeetingId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { generalMeetingId } }); // GET general_meeting URL
    dispatch({ type: 'fetch_general_meeting', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Fetch Polls

const fetchPolls = dispatch => async ({ condoAssociationId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { condoAssociationId } }); // GET polls URL
    dispatch({ type: 'fetch_polls', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Fetch Poll

const fetchPoll = dispatch => async ({ pollId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { pollId } }); // GET poll URL
    dispatch({ type: 'fetch_poll', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Vote Poll

const votePoll = dispatch => async ({ pollId, optionId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.post('', { pollId, optionId }); // POST vote URL

    fetchPoll({ pollId });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Fetch Elections

const fetchElections = dispatch => async ({ condoAssociationId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { condoAssociationId } }); // GET elections URL
    dispatch({ type: 'fetch_elections', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Fetch Election

const fetchElection = dispatch => async ({ electionId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const { data } = await axios.get('', { params: { electionId } }); // GET election
    dispatch({ type: 'fetch_election', payload: data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

// Vote Election

const voteElection = dispatch => async ({ electionId, candidateId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.post('', { electionId, candidateId }); // POST vote URL

    fetchElection({ electionId });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message }); 
  }
};

export const { Context, Provider } = createDataContext(reducer, {
  fetchCondoAssociations, fetchCondoAssociation, fetchDiscussions, fetchDiscussion, createDiscussion, updateDiscussion,
  deleteDiscussion, addComment, fetchAds, fetchAd, createAd, udpdateAd, deleteAd, fetchAdminMeetings, fetchAdminMeeting,
  fetchGeneralMeetings, fetchGeneralMeeting, fetchPolls, fetchPoll, votePoll, fetchElections, fetchElection, voteElection
}, {
  condoAssociations: [], condoAssociation: null, discussions: [], discussion: null, ads: [], ad: null, adminMeetings: [],
  adminMeeting: null, generalMeetings: [], generalMeeting: null, polls: [], poll: null, elections: [], election: null
});