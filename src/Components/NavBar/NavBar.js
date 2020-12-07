import React, { useContext } from 'react';
import condoLogo from '../../assets/logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { Context as AuthenticationContext } from '../../context/AuthenticationContext';

function NavBar (props) {
    const { signout } = useContext(AuthenticationContext);

    const AdminNavBar = () => {
        const handleLogout = () => {
            props.history.push('/');
            signout();
        }
        return (
            <div>
                <AppBar position="static">
                    <Toolbar style={{ backgroundColor: '#32a895' }}>
                    <Link className="logo-wrapper" to='/'><img className="logo" src={condoLogo} alt="condo"></img></Link>
                        <div style={{ display: 'flex' }}>
                            <Button component={Link} to='/admin' color="inherit" className="nav-link" >Admin</Button>
                            <Button component={Link} to='/condo-association' color="inherit" className="nav-link">Condo Association</Button>
                            <Button component={Link} to='/group-home' color="inherit" className="nav-link" >Groups</Button>
                            <Button component={Link} to='/email' color="inherit" className="nav-link" >Email</Button>
                            <Button component={Link} to='/my-account' color="inherit" className="nav-link" >My account</Button>
                            <Button color="inherit" className="nav-link" onClick={handleLogout}>Logout</Button>
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
            <div>
                <AppBar position="static">
                    <Toolbar style={{ backgroundColor: '#32a895' }}>
                    <Link className="logo-wrapper" to='/'><img className="logo" src={condoLogo} alt="condo"></img></Link>
                        <div style={{ display: 'flex' }}>
                            <Button component={Link} to='/condo-association' color="inherit" className="nav-link">Condo Association</Button>
                            <Button component={Link} to='/group-home' color="inherit" className="nav-link" >Groups</Button>
                            <Button component={Link} to='/email' color="inherit" className="nav-link" >Email</Button>
                            <Button component={Link} to='/my-account' color="inherit" className="nav-link" >My account</Button>
                            <Button color="inherit" className="nav-link" onClick={handleLogout}>Logout</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );

    }

    const PublicNavBar = () => {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar style={{ backgroundColor: '#32a895' }}>
                    <Link className="logo-wrapper" to='/'><img className="logo" src={condoLogo} alt="condo"></img></Link>
                        <div style={{ display: 'flex' }}>
                            <Button component={Link} to='/' color="inherit" className="nav-link" >Ads</Button>
                            <Button component={Link} to='/login' color="inherit" className="nav-link">Condo Association</Button>
                            <Button color="inherit" className="nav-link" component={Link} to='login'>Login</Button>
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
