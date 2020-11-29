import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { logout } from '../../utils/JWTAuth';
import { withRouter } from 'react-router-dom';

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

export function PrivateNavBar (props) {
    const classes = useStyles();
    // const [active, setActive] = React.useState(props.active);

    const handleLogout = () => {
        logout();
        // setActive(false);
        // props.history.push('/');
    }

    React.useEffect(() => {
        handleLogout();
    });

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
        </div >
    );
}

export function PublicNavBar () {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: '#32a895' }}>
                    <Typography variant="h6" className={classes.title}>
                        CONSys
                    </Typography>
                    <div style={{ display: 'flex' }}>
                        <Button component={Link} to='/admin' color="inherit" className={classes.test} >hey</Button>
                        <Button component={Link} to='/condo-association' color="inherit" className={classes.test}>no</Button>
                        <Button color="inherit" className={classes.test} component={Link} to='login'>Login</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    );

}

function NavBar (props) {
    // const active = props.active;
    const active = localStorage.getItem('is_authenticated');

    if (localStorage.getItem('is_authenticated')) {
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

export default NavBar;