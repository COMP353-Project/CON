import createDataContext from './createDataContext';
import axios from 'axios';

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
    case 'fetch_contracts': return { ...state, contracts: action.payload };
    case 'fetch_contract': return { ...state, contract: action.payload };
    default: return state;
  }
};

// Fetch Condo Associations

const fetchCondoAssociations = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'get',
      url: 'fetchAssociations.php',
      headers: {
        'content-type': 'application/json'
      },
    }); dispatch({ type: 'fetch_condo_associations', payload: response.data });

    dispatch({ type: 'stop_loading' });
    return response.data;
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

const fetchDiscussions = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios.get(
      `get_discussions.php?id=${localStorage.getItem('userid')}`
    );
    dispatch({ type: 'fetch_discussions', payload: response.data });

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
    const response = await axios.get(
      `get_discussion.php?id=${discussionId}`
    );

    dispatch({ type: 'fetch_discussion', payload: response.data });

    dispatch({ type: 'stop_loading' });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Create Discussion

const createDiscussion = dispatch => async ({ title, content, isPublic }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.post('create_discussion.php', {
      title, content, is_public: isPublic ? 1 : 0, id: localStorage.getItem('userid')
    });
  }
  catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Update Discussion

const updateDiscussion = dispatch => async ({ discussionId, title, isPublic, content }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.put(
      'update_discussion.php',
      { id: discussionId, title, is_public: isPublic, content }
    );
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Delete Discussion

const deleteDiscussion = dispatch => async ({ discussionId }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.delete('delete_discussion.php', { data: { id: discussionId } });
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
    await axios.post('create_comment.php', { discussion_id: discussionId, content, id: localStorage.getItem('userid') });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Ads

const fetchAds = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios.get('getAds.php'); // GET ads URL
    dispatch({ type: 'fetch_ads', payload: response.data });
    dispatch({ type: 'stop_loading' });
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Ads

const fetchAllAds = dispatch => async (id) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios.get(`getAllAds.php?id=${id}`);
    dispatch({ type: 'fetch_all_ads', payload: response.data });
    dispatch({ type: 'stop_loading' });
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Ad

const fetchAd = dispatch => async ({ condo_assoc_post_id }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {

    const response = await axios({
      method: 'get',
      url: `getAd.php?condo_assoc_post_id=${condo_assoc_post_id}`,
    });

    dispatch({ type: 'fetch_ad', payload: response.data });
    dispatch({ type: 'stop_loading' });
    return response.data;

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

    return data.id;
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
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Delete Ad

const deleteAd = dispatch => async ({ condo_assoc_post_id }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });
  try {
    const response = await axios({
      method: 'delete',
      url: 'deleteAd.php',
      headers: {
        'content-type': 'application/json'
      },
      data: { condo_assoc_post_id, user_id: localStorage.getItem('userid') } // add condo_assoc title
    });
    return response;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Admin Meetings
const fetchAdminMeetings = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios.get('getAdminMeetings.php'); // GET general_meetings URL
    dispatch({ type: 'fetch_admin_meetings', payload: response.data });

    dispatch({ type: 'stop_loading' });
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Admin Meeting

const fetchAdminMeeting = dispatch => async ({ id }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios({
      method: 'get',
      url: `getAdminMeeting.php?id=${id}`,
    });
    dispatch({ type: 'fetch_admin_meeting', payload: response.data });
    dispatch({ type: 'stop_loading' });
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch General Meetings

const fetchGeneralMeetings = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios.get('getGeneralMeetings.php'); // GET general_meetings URL
    dispatch({ type: 'fetch_general_meetings', payload: response.data });
    dispatch({ type: 'stop_loading' });
    return response.data;
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch General Meeting

const fetchGeneralMeeting = dispatch => async ({ id }) => {

  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });
  try {
    const response = await axios({
      method: 'get',
      url: `getGeneralMeeting.php?id=${id}`,
    });

    dispatch({ type: 'stop_loading' });
    return response.data;
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

// Fetch Contracts

const fetchContracts = dispatch => async () => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios.get(`get_contracts.php?id=${localStorage.getItem('userid')}`);
    console.log(response)
    dispatch({ type: 'fetch_contracts', payload: response.data });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Create Contract

const createContract = dispatch => async ({ name, description, budget }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.post('create_contract.php', { name, description, budget, id: localStorage.getItem('userid') });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Fetch Contract

const fetchContract = dispatch => async ({ id }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    const response = await axios.get(`get_contract.php?id=${id}`);

    dispatch({ type: 'fetch_contract', payload: response.data });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Add Submission

const addSubmission = dispatch => async ({ contract_id, poster, statement }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.post('create_submission.php', { contract_id, poster, statement });
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

// Delete Contract

const deleteContract = dispatch => async ({ id }) => {
  dispatch({ type: 'reset_error' });
  dispatch({ type: 'start_loading' });

  try {
    await axios.delete(
      'delete_contract.php',
      { data: { id } }
    );
  } catch (e) {
    dispatch({ type: 'stop_loading' });
    dispatch({ type: 'set_error', payload: e.message });
  }
};

export const { Context, Provider } = createDataContext(reducer, {
  fetchCondoAssociations, fetchCondoAssociation, fetchDiscussions, fetchDiscussion, createDiscussion, updateDiscussion,
  deleteDiscussion, addComment, fetchAds, fetchAllAds, fetchAd, createAd, udpdateAd, deleteAd, fetchAdminMeetings, fetchAdminMeeting,
  fetchGeneralMeetings, fetchGeneralMeeting, fetchPolls, fetchPoll, votePoll, fetchElections, fetchElection, voteElection,
  fetchContracts, createContract, fetchContract, addSubmission, deleteContract
}, {
  condoAssociations: [], condoAssociation: null, discussions: [], discussion: {}, ads: [], ad: null, adminMeetings: [],
  adminMeeting: null, generalMeetings: [], generalMeeting: null, polls: [], poll: null, elections: [], election: null, contracts: [],
  contract: {}
});
