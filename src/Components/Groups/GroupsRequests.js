import { Button, ListItem, ListItemText, List, Container } from '@material-ui/core';
import { PinDropSharp } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GroupsStyle.css'
import GroupsNav from './GroupsNav.js'
import MyGroupNav from './MyGroupNav.js'

function GroupsRequests (props) {

    return (
        <div>
            <GroupsNav/>
            <MyGroupNav/>
            <h1>Groups Requests Page</h1>
        </div>

    );
}

export default GroupsRequests;
