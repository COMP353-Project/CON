import { Button, ListItem, ListItemText, List, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GroupsStyle.css'
import CreateGroupButton from './CreateGroupBtn';
import GroupsNav from './GroupsNav.js'
import {Context as GroupsContext} from '../../context/GroupsContext.js'

function MyGroups () {
    const { fetchMyGroups, fetchGroup } = React.useContext(GroupsContext);
    const [groups, setGroups] = React.useState([])

    const isAdmin = true;
    var isLoading = true;
    const onDelete = () => {

    }

    const getMyGroups = async() => {
      setGroups( await fetchMyGroups(localStorage.getItem("userid")));
      console.log(groups)
      isLoading = false;
    }

    React.useEffect(() => {
      getMyGroups();
    }, []);

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
                      {isAdmin ? <Button>Delete</Button> : <div></div>}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
}

export default MyGroups;
