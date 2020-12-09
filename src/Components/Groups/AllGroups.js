import { Button, ListItem, ListItemText, List, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GroupsStyle.css'
import GroupsNav from './GroupsNav.js'

function AllGroups () {

    const [groups, setGroups] = React.useState(() => [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }])
    const isAdmin = true;

    const onDelete = () => {

    }

    return (
      <div>
        <GroupsNav/>
        <div className="page-container">
          <h1>All Groups</h1>
          <div className="groups-container">
              { groups.map(group => {
                return (
                  <div className="group-container">
                      <Button component={Link} 
                          to={{
                              pathname: "/groups/" + group.id +"/home",
                              state: { id: group.id}
                          }}>
                          <p>{"Click this to go to group " + group.id}</p>
                      </Button>
                      <div>Users go here</div>
                      {isAdmin ? <Button>Delete</Button> : <div></div>}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
}

export default AllGroups;
