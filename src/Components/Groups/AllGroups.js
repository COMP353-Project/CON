import { Button, ListItem, ListItemText, List, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GroupsStyle.css'
import GroupsNav from './GroupsNav.js'
import { Context as GroupsContext } from '../../context/GroupsContext.js'

function AllGroups () {
  const { fetchAllGroups } = React.useContext(GroupsContext);
  const [groups, setGroups] = React.useState([]);

  const getGroups = async () => {
    setGroups(await fetchAllGroups());
  }

  React.useEffect(() => {
    getGroups();
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
          <h1>All Groups</h1>
        </div>
        <RenderGroups />
      </div>
    </div>
  );
}

export default AllGroups;
