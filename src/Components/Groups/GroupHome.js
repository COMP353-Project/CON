import { Button, ListItem, ListItemText, List, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GroupsStyle.css'

function GroupHome () {

    const [groups, setGroups] = React.useState(() => [{ id: 1 }, { id: 2 }])

    return (
        <div>
            <h1>Groups Home Page</h1>
            <div class="groups-container">
                <List>
                    {groups.map(group => {
                        return (
                            <Container class="groupList" maxwidth="sm">
                                <ListItem>
                                    <Button component={Link} to={"/groups/" + group.id}>
                                        <ListItemText primary={"Click this to go to group " + group.id} />
                                    </Button>
                                    <div>Users go here</div>
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

export default GroupHome;
