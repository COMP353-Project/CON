import { Button, ListItem, ListItemText, List, Container } from '@material-ui/core';
import { PinDropSharp } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GroupsStyle.css'
import GroupsNav from './GroupsNav.js'
import MyGroupNav from './MyGroupNav.js'

function GroupsHome (props) {

    const [name, setName] = React.useState(() => "name")
    const [description, setDescription] = React.useState(() => "description")
    const [creationDate, setCreationDate] = React.useState(() => "January 12th, 2020")

    return (
        <div>
            <GroupsNav/>
            <MyGroupNav/>
            <h1>Groups Home Page</h1>
        </div>

    );
}

export default GroupsHome;
