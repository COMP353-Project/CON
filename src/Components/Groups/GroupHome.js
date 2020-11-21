import { Button, TextareaAutosize, ListItem, ListItemText, List, Box, Container  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link, Route } from 'react-router-dom';
import Post from './Post';
import '../../css/GroupsStyle.css'
import Groups from './Groups';

function GroupHome () {

    const [groups, setGroups] = React.useState(() => [{id: 1}])

     return (
        <div>
            <h1>Groups Home Page</h1>
            <div class="groups-container">
                <List>
                    {groups.map(group =>{
                        return (
                            <Container maxwidth="sm">
                                <Link to={"/groups/" + group.id}>
                                    <ListItem Button/>
                                    <ListItemText primary="Click this to go to group 1"/>
                                </Link>
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
