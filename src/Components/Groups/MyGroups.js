import { Button, ListItem, ListItemText, List, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GroupsStyle.css'
import GroupsNav from './GroupsNav.js'

function MyGroups () {

    const [groups, setGroups] = React.useState(() => [{ id: 1 }, { id: 2 }])

    const isAdmin = true;

    const onDelete = () => {

    }

    return (
        <div>
            <GroupsNav/>
            <h1>My Groups</h1>
            <Button>Create Group</Button>
            <div class="groups-container">
                <List>
                    {groups.map(group => {
                        return (
                            <Container class="groupList" maxwidth="sm">
                                <ListItem>
                                    <Button component={Link} to={"/groups/" + group.id +"/home"}>
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

export default MyGroups;
