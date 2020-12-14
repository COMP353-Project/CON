import React from 'react';
import { Link } from 'react-router-dom';

import CreateGroupButton from './CreateGroupBtn';
import GroupsNav from './GroupsNav.js'
import { Context as GroupsContext } from '../../context/GroupsContext.js'

function MyGroups () {
  const { fetchMyGroups } = React.useContext(GroupsContext);
  const [groups, setGroups] = React.useState([]);

  const getMyGroups = async () => {
    setGroups(await fetchMyGroups(localStorage.getItem("userid")));
  }

  React.useEffect(() => {
    getMyGroups();
  }, []);

  const RenderGroups = () => {
    if (groups) {
      return groups.map(({ id, name, description }) => {
        return (
          <React.Fragment key={id}>
            <div className="card">
              <div className='card-title'>{name}</div>
              <div className='card-description'>{description}</div>
              {< Link to={`/groups/${id}/home`}>
                <div className="details-button">View Details</div>
              </Link>}
            </div>
          </React.Fragment>
        );
      });
    }
    else {
      return (
        <div className="friend-empty">No groups!</div>
      );
    }
  };

  return (
    <div>
      <GroupsNav />
      <div className="page-container">
        <div className="page-header">
          <h1>My Groups</h1>
          <CreateGroupButton />
        </div>
        <RenderGroups />
      </div>
    </div>
  );
}

export default MyGroups;
