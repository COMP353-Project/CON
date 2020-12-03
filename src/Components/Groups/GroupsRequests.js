import { Card, Box, Button, ListItem, ListItemText, List, Container } from '@material-ui/core';
import { PinDropSharp } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GroupsStyle.css'
import GroupsNav from './GroupsNav.js'
import MyGroupNav from './MyGroupNav.js'
import '../../css/GlobalStyles.css'

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
