import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    test: {
        // flexGrow: 3,
        paddingRight: 10,
        textTransform: 'none'
    }
}));

export default function NavBar () {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: '#32a895' }}>
                    <Typography variant="h6" className={classes.title}>
                        CONSys
                    </Typography>
                    <div style={{ display: 'flex' }}>
                        <Button component={Link} to='/condo-association' color="inherit" className={classes.test}>Condo Association</Button>
                        <Button component={Link} to='/groups' color="inherit" className={classes.test} >Groups</Button>
                        <Button component={Link} to='/email' color="inherit" className={classes.test} >Email</Button>
                        <Button component={Link} to='/my-account' color="inherit" className={classes.test} >My account</Button>


                    </div>
                </Toolbar>
            </AppBar>
        </div >
    );
}
