import { Card, Button, ListItem, ListItemText, Container } from '@material-ui/core';
import React from 'react';
import '../../css/GroupsStyle.css'
import GroupsNav from './GroupsNav.js'
import MyGroupNav from './MyGroupNav.js'

function GroupsRequests () {

    const[users, setUsers] = React.useState([{username: "user1"}, {username: "user2"}])
    return (
        <div>
            <GroupsNav/>
            <MyGroupNav/>
            <h1>Groups Requests Page</h1>
            {users.map(user =>{
                    return (
                        <Container  fixed>
                            <Card  variant="outlined">
                             <ListItem>
                                <ListItemText inset="false" primary={user.username}/>    
                            </ListItem>
                            <Button>Accept</Button>
                            <Button>Reject</Button>
                            </Card>
                        </Container>
                    );
                }
            )}
            
        </div>

    );
}

export default GroupsRequests;
