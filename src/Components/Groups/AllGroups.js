import { Button, ListItem, ListItemText, List, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GroupsStyle.css'
import GroupsNav from './GroupsNav.js'

function AllGroups () {

    const [groups, setGroups] = React.useState(() => [{ id: 1 }, { id: 2 }])
    const isAdmin = true;

    const onDelete = () => {

    }

    return (
        <div>
            <GroupsNav/>
            <h1>All Groups</h1>
            <div className="groups-container">
                <List>
                    {groups.map(group => {
                        return (
                            <Container className="groupList" maxwidth="sm">
                                <ListItem>
                                    <Button 
                                        component={Link} 
                                        to={{
                                            pathname: "/groups/" + group.id +"/home",
                                            state: { id: group.id}
                                        }}>
                                        <ListItemText primary={"Click this to go to group " + group.id} />
                                    </Button>
                                    <div>Users go here</div>
                                    {isAdmin ? <Button>Delete</Button> : <div></div>}
                                </ListItem>
                            </Container>
                        );
                    }
                    )}
                </List>
            </div>
        </div>

    );
}

export default AllGroups;
