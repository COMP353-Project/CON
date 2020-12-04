import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { Context as AuthenticationContext } from '../../context/AuthenticationContext';

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
        paddingRight: 10,
        textTransform: 'none'
    }
}));

function NavBar (props) {
    const classes = useStyles();
    const { signout } = useContext(AuthenticationContext);

    const AdminNavBar = () => {
        const handleLogout = () => {
            props.history.push('/');
            signout();
        }
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar style={{ backgroundColor: '#32a895' }}>
                        <Typography variant="h6" className={classes.title}>
                            CONSys
                    </Typography>
                        <div style={{ display: 'flex' }}>
                            <Button component={Link} to='/admin' color="inherit" className={classes.test} >Admin</Button>
                            <Button component={Link} to='/condo-association' color="inherit" className={classes.test}>Condo Association</Button>
                            <Button component={Link} to='/group-home' color="inherit" className={classes.test} >Groups</Button>
                            <Button component={Link} to='/email' color="inherit" className={classes.test} >Email</Button>
                            <Button component={Link} to='/my-account' color="inherit" className={classes.test} >My account</Button>
                            <Button color="inherit" className={classes.test} onClick={handleLogout}>Logout</Button>

                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );

    }

    const PrivateNavBar = () => {
        const handleLogout = () => {
            props.history.push('/');
            signout();
        }
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar style={{ backgroundColor: '#32a895' }}>
                        <Typography variant="h6" className={classes.title}>
                            CONSys
                    </Typography>
                        <div style={{ display: 'flex' }}>
                            <Button component={Link} to='/condo-association' color="inherit" className={classes.test}>Condo Association</Button>
                            <Button component={Link} to='/group-home' color="inherit" className={classes.test} >Groups</Button>
                            <Button component={Link} to='/email' color="inherit" className={classes.test} >Email</Button>
                            <Button component={Link} to='/my-account' color="inherit" className={classes.test} >My account</Button>
                            <Button color="inherit" className={classes.test} onClick={handleLogout}>Logout</Button>

                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );

    }

    const PublicNavBar = () => {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar style={{ backgroundColor: '#32a895' }}>
                        <Typography variant="h6" className={classes.title}>
                            CONSys
                    </Typography>
                        <div style={{ display: 'flex' }}>
                            <Button component={Link} to='/' color="inherit" className={classes.test} >Ads</Button>
                            <Button component={Link} to='/login' color="inherit" className={classes.test}>Condo Association</Button>
                            <Button color="inherit" className={classes.test} component={Link} to='login'>Login</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

    if (localStorage.getItem('user') !== null && localStorage.getItem('admin') === "1") {
        return (
            <AdminNavBar />
        );
    }

    else if (localStorage.getItem('user') !== null) {
        return (
            <PrivateNavBar />
        );
    }
    else {
        return (
            <PublicNavBar />
        );
    }
}

export default withRouter(NavBar);
