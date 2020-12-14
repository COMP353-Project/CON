import { Button, ListItem, ListItemText, List, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import GroupsNav from './GroupsNav.js'

function GroupsLanding () {


    return (
        <div>
            <GroupsNav/>
            <h1>Groups Landing Page</h1>
        </div>

    );
}

export default GroupsLanding;
