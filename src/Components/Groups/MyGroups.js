import { Button, ListItem, ListItemText, List, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GroupsStyle.css'
import CreateGroupButton from './CreateGroupBtn';
import GroupsNav from './GroupsNav.js'

function MyGroups () {

    const [groups, setGroups] = React.useState(() => [{ id: 1 }, { id: 2 }])

    const isAdmin = true;

    const onDelete = () => {

    }

    return (
      <div>
        <GroupsNav/>
        <div className="page-container">
          <div className="page-header">
            <h1>My Groups</h1>
            <CreateGroupButton />
          </div>
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
                      {isAdmin ? <Button className="post-btn del">Delete</Button> : <div></div>}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
}

export default MyGroups;
